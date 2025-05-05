"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Textarea } from "../../ui/textarea";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

// Yup schema for BookForm
const bookSchema = yup.object().shape({
  book_title: yup.string().required("Book Title is required"),
  author: yup.string().required("Author is required"),
  no_of_chapters: yup
    .number()
    .required("Number of chapters is required")
    .min(1, "Must have at least 1 chapter")
    .typeError("Must be a number"),
  book_image: yup
    .mixed()
    .nullable()
    .test("fileType", "Only image files are allowed", (value: any) =>
      value
        ? ["image/jpeg", "image/png", "image/gif"].includes(value.type)
        : true
    ),
});

// Yup schema for ChapterForm (applied to each chapter)
const chapterSchema = yup.object().shape({
  chapter_title: yup.string().required("Chapter Title is required"),
  chapter_content: yup.string().required("Chapter Content is required"),
});

// Combined schema for the entire form
const fullSchema = yup.object().shape({
  book_title: bookSchema.fields.book_title,
  author: bookSchema.fields.author,
  no_of_chapters: bookSchema.fields.no_of_chapters,
  book_image: bookSchema.fields.book_image,
  chaptersData: yup.array().of(chapterSchema).required(),
});

export default function Form() {
  const [chapters, setChapters] = useState<number>(0);

  const {
    control,
    handleSubmit, // Define handleSubmit here
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(fullSchema),
    defaultValues: {
      book_title: "",
      author: "",
      no_of_chapters: 1,
      book_image: null,
      chaptersData: [],
    },
  });

  const formData = watch(); // Watch form values for debugging
  console.log("Form Data:", formData, "Errors:", errors);

  const handleBookSubmit = (data) => {
    const chaptersCount = data.no_of_chapters;
    setChapters(chaptersCount);
    setValue(
      "chaptersData",
      Array(chaptersCount).fill({ chapter_title: "", chapter_content: "" })
    );
  };

  const handleFinalSubmit = (data) => {
    console.log("Final Submitted Data:", data);
    alert("Book and all chapters submitted successfully!");
  };

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-full lg:py-16">
        <BookForm
          control={control}
          errors={errors}
          handleSubmit={handleSubmit} // Pass handleSubmit to BookForm
          onSubmit={handleBookSubmit}
        />
        {chapters > 0 && (
          <>
            <h2 className="my-4 text-xl font-bold text-gray-900 dark:text-white">
              Chapters
            </h2>
            {Array.from({ length: chapters }, (_, index) => (
              <ChapterForm
                key={index}
                chapter_no={index + 1}
                control={control}
                errors={errors}
              />
            ))}
            <button
              onClick={handleSubmit(handleFinalSubmit)}
              className="px-5 py-2.5 mt-4 bg-green-500 text-white rounded"
            >
              Submit All
            </button>
          </>
        )}
      </div>
    </section>
  );
}

interface BookFormProps {
  control: any;
  errors: any;
  handleSubmit: any; // Add handleSubmit to props
  onSubmit: (data: any) => void;
}

const BookForm: React.FC<BookFormProps> = ({
  control,
  errors,
  handleSubmit,
  onSubmit,
}) => {
  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add Book
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div>
            <Label htmlFor="book_title">Book Title</Label>
            <Controller
              name="book_title"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  id="book_title"
                  placeholder="Book Title"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
            {errors.book_title && (
              <p style={{ color: "red" }}>{errors.book_title.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="no_of_chapters">Number of Chapters</Label>
            <Controller
              name="no_of_chapters"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="number"
                  id="no_of_chapters"
                  placeholder="3"
                  value={field.value}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              )}
            />
            {errors.no_of_chapters && (
              <p style={{ color: "red" }}>{errors.no_of_chapters.message}</p>
            )}
          </div>

          <div className="w-full">
            <Label htmlFor="author">Author</Label>
            <Controller
              name="author"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={(value) => field.onChange(value)}
                  value={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Author" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Author</SelectLabel>
                      {[
                        { value: "hamza", label: "Hamza" },
                        { value: "shazil", label: "Shazil" },
                      ].map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.author && (
              <p style={{ color: "red" }}>{errors.author.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="book_image">Book Cover Image</Label>
            <Controller
              name="book_image"
              control={control}
              render={({ field }) => (
                <Input
                  type="file"
                  id="book_image"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files[0])}
                />
              )}
            />
            {errors.book_image && (
              <p style={{ color: "red" }}>{errors.book_image.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="px-5 py-2.5 mt-4 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </form>
    </>
  );
};

interface ChapterFormProps {
  chapter_no: number;
  control: any;
  errors: any;
}

const ChapterForm: React.FC<ChapterFormProps> = ({
  chapter_no,
  control,
  errors,
}) => {
  return (
    <div className="mt-5 p-4 border rounded-lg shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Chapter {chapter_no}
      </h3>
      <div className="grid gap-4 sm:grid-cols-1">
        <div>
          <Label htmlFor={`chaptersData.${chapter_no - 1}.chapter_title`}>
            Chapter Title
          </Label>
          <Controller
            name={`chaptersData.${chapter_no - 1}.chapter_title`}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                id={`chaptersData.${chapter_no - 1}.chapter_title`}
                placeholder="Chapter Title"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          {errors.chaptersData?.[chapter_no - 1]?.chapter_title && (
            <p style={{ color: "red" }}>
              {errors.chaptersData[chapter_no - 1].chapter_title.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor={`chaptersData.${chapter_no - 1}.chapter_content`}>
            Content
          </Label>
          <Controller
            name={`chaptersData.${chapter_no - 1}.chapter_content`}
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                id={`chaptersData.${chapter_no - 1}.chapter_content`}
                placeholder="Enter Chapter content here"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          {errors.chaptersData?.[chapter_no - 1]?.chapter_content && (
            <p style={{ color: "red" }}>
              {errors.chaptersData[chapter_no - 1].chapter_content.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}

export function Label({ children, htmlFor }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
    >
      {children}
    </label>
  );
}
