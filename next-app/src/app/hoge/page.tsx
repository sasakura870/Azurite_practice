import { useBlobStorage } from "@/hooks/useBlobStorage";

export default async function Hoge() {
  const [hoge, { createContainer, createBlob }] = await useBlobStorage();

  const handleCreateContainer = async () => {
    const name = Math.floor(Math.random() * 1000).toString();
    const container = await createContainer(name);
    console.log(container);
  };
  const handleCreateBlob = async () => {
    const containerName = "test-1";
    const blobName = Math.floor(Math.random() * 1000).toString();
    const content = new ArrayBuffer(16);
    const blob = await createBlob(containerName, blobName, content);
    console.log(blob)
  };
  await handleCreateContainer();
  await handleCreateBlob();
  return (
    <div>
      <h1>piyoaapiyo - {hoge}</h1>
    </div>
  );
}
