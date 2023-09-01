const useRemoveSpaceNew = (value) => {
  return value
    ?.replace(/[^\w\s-]/g, "-") // Replace special characters except hyphen
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace multiple consecutive hyphens with a single hyphen
    .replace(/^-/, "")
    .replace(/^-+|-+$|(-)+/g, "$1")
    .toLowerCase()
    .trim();
};

export default useRemoveSpaceNew;
