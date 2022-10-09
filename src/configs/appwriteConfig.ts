const AppwriteConfig = {
  endPoint: import.meta.env.VITE_ENDPOINT,
  projectId: import.meta.env.VITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_DATABASE_ID,
  bucketId: import.meta.env.VITE_BUCKET_ID,
};

export default AppwriteConfig;
