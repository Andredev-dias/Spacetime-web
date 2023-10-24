import { ChangeEvent, useState } from "react";

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null);

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;
    if (!files) {
      return;
    }
    const prevURL = URL.createObjectURL(files[0]);
    setPreview(prevURL);
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        id="media"
        accept="image/*"
        className="invisible h-0 w-0"
        name="coverUrl"
      />

      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt="Preview"
          className="w-full aspect-video rounded-lg object-cover"
        />
      )}
    </>
  );
}
