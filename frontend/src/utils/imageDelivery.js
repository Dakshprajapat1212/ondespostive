const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const cloudFolder = (import.meta.env.VITE_CLOUDINARY_FOLDER || "ondes-positive").replace(/^\/+|\/+$/g, "");

export function getImageUrl(localImage) {
  if (!cloudName || cloudName === "your_cloud_name" || !localImage) return localImage;

  const fileName = decodeURIComponent(localImage.split("/").pop() || "");
  const extensionIndex = fileName.lastIndexOf(".");
  const name = extensionIndex === -1 ? fileName : fileName.slice(0, extensionIndex);
  const publicId = name.replace(/-[A-Za-z0-9_-]{8,}$/, "");
  const path = cloudFolder ? `${cloudFolder}/${publicId}` : publicId;

  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_auto/${path}`;
}
