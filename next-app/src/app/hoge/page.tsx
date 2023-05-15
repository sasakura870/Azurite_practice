import { useBlobStorage } from "@/hooks/useBlobStorage"

export default async function Hoge() {
  const [hoge, {createContainer}] = await useBlobStorage()

  const handleCreateContainer = async () => {
    const name = Math.floor(Math.random() * 1000).toString();
    const container = await createContainer(name);
    console.log(container)
  }
  await handleCreateContainer()
  return (
    <div>
      <h1>piyoaapiyo - {hoge}</h1>
    </div>
  )
}
