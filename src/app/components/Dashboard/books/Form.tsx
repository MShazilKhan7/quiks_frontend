"use client";
import { useState } from "react";
import { Textarea } from "../../ui/textarea";
import { Input } from "../../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../ui/select";

export default function Form() {
  const [chapters, setChapters] = useState<number>(0);
  const [formData, setFormData] = useState<{ book_title: string; author: string; no_of_chapters: number; book_image?: string; chaptersData: { chapter_title: string; chapter_content: string }[] }>({
    book_title: "",
    author: "",
    no_of_chapters: 1,
    book_image: "",
    chaptersData: [],
  });

  const handleFinalSubmit = () => {
    console.log("Final Submitted Data:", formData);
    alert("Book and all chapters submitted successfully!");
  };

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-full lg:py-16">
        <BookForm setChapters={setChapters} setFormData={setFormData} />
        
        {chapters > 0 && (
          <>
            <h2 className="my-4 text-xl font-bold text-gray-900 dark:text-white">Chapters</h2>
            {Array.from({ length: chapters }, (_, index) => (
              <ChapterForm key={index} chapter_no={index + 1} setFormData={setFormData} />
            ))}

            <button onClick={handleFinalSubmit} className="px-5 py-2.5 mt-4 bg-green-500 text-white rounded">
              Submit All
            </button>
          </>
        )}
      </div>
    </section>
  );
}

interface BookFormProps {
  setChapters: (chapters: number) => void;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const BookForm: React.FC<BookFormProps> = ({ setChapters, setFormData }) => {
  const [localData, setLocalData] = useState({ book_title: "", author: "", no_of_chapters: 1, book_image: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const chaptersCount = Number(localData.no_of_chapters);
    setChapters(chaptersCount);
    setFormData((prev: any) => ({ ...prev, ...localData, chaptersData: Array(chaptersCount).fill({ chapter_title: "", chapter_content: "" }) }));
  };

  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <div>
            <Label htmlFor="book_title">Book Title</Label>
            <Input
              type="text"
              name="book_title"
              id="book_title"
              placeholder="Book Title"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="no_of_chapters">Number of Chapters</Label>
            <Input
              type="number"
              name="no_of_chapters"
              id="no_of_chapters"
              placeholder="3"
              required
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <Label htmlFor="author">Author</Label>
            <Select onValueChange={(value) => setLocalData((prev) => ({ ...prev, author: value }))}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Author" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Author</SelectLabel>
                  {[
                    { value: "hamza", label: "Hamza" },
                    { value: "shazil", label: "Shazil" }
                  ].map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="book_image">Book Cover Image</Label>
            <Input
              type="file"
              name="book_image"
              id="book_image"
              accept="image/*"
              className="mt-1"
            />
          </div>
        </div>

        <button type="submit" className="px-5 py-2.5 mt-4 bg-blue-500 text-white rounded">
          Next
        </button>
      </form>
    </>
  );
};

interface ChapterFormProps {
  chapter_no: number;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const ChapterForm: React.FC<ChapterFormProps> = ({ chapter_no, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => {
      const updatedChapters = [...prev.chaptersData];
      updatedChapters[chapter_no - 1] = { ...updatedChapters[chapter_no - 1], [name]: value };
      return { ...prev, chaptersData: updatedChapters };
    });
  };

  return (
    <div className="mt-5 p-4 border rounded-lg shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Chapter {chapter_no}</h3>
      <div className="grid gap-4 sm:grid-cols-1">
        
        <div>
          <Label htmlFor="book_title">Chapter Title</Label>
          <Input
            type="text"
            name="chapter_title"
            id="chapter_title"
            placeholder="Chapter Title"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="chapter_content">Content</Label>
          <Textarea 
            placeholder="Enter Chapter content here" 
            name="chapter_content" 
            onChange={handleChange} 
          />
        </div>
      </div>
    </div>
  );
};


interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
}

function Label({ children, htmlFor }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {children}
    </label>
  );
}
