import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../ui/input"; // Assuming this is your custom Input component
import * as yup from "yup";
import { Label } from "../books/Form"; // Assuming this is your custom Label component
import { Textarea } from "../../ui/textarea"; // Assuming this is your custom Textarea component

const authorSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().max(100, "Bio must not exceed 100 characters").nullable(),
  profilePicture: yup
    .mixed()
    .nullable()
    .test("fileType", "Only image files are allowed", (value: any) =>
      value
        ? ["image/jpeg", "image/png", "image/gif"].includes(value?.type)
        : true
    ),
  nationality: yup.string().nullable(),
  website: yup.string().url("Must be a valid URL").nullable(),
});

function AuthorForm() {
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authorSchema),
    defaultValues: {
      name: "",
      bio: "",
      profilePicture: null,
      nationality: "",
      website: "",
    },
  });

  const form = watch();

  const onSubmit = (data) => {
    console.log("Submitted data:", data); // API call
  };

  return (
    <div className="py-8 px-4 mx-auto max-w-full lg:py-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add Author
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div>
            <Label>Author Name</Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Author Name"
                  value={field.value} // Explicitly set value
                  onChange={(e) => field.onChange(e.target.value)} // Explicitly set onChange
                />
              )}
            />
            {errors.name && (
              <p style={{ color: "red" }}>{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label>Nationality</Label>
            <Controller
              name="nationality"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Nationality"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
            {errors.nationality && (
              <p style={{ color: "red" }}>{errors.nationality.message}</p>
            )}
          </div>

          <div>
            <Label>Bio</Label>
            <Controller
              name="bio"
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder="Enter Bio"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)} // Fix: Pass onChange
                />
              )}
            />
            {errors.bio && <p style={{ color: "red" }}>{errors.bio.message}</p>}{" "}
            {/* Fix: errors.bio */}
          </div>

          <div>
            <Label>Profile Image</Label>
            <Controller
              name="profilePicture"
              control={control}
              render={({ field }) => (
                <Input
                  type="file"
                  onChange={(e) => field.onChange(e.target.files[0])} // Handle file input
                />
              )}
            />
            {errors.profilePicture && (
              <p style={{ color: "red" }}>{errors.profilePicture.message}</p>
            )}
          </div>

          <div>
            <Label>Website/Social Link</Label>
            <Controller
              name="website"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="url"
                  placeholder="https://example.com"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
            {errors.website && (
              <p style={{ color: "red" }}>{errors.website.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="px-5 py-2.5 mt-4 bg-green-500 text-white rounded"
        >
          Add Author
        </button>
      </form>
    </div>
  );
}

export default AuthorForm;
