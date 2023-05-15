import { BlobServiceClient, StorageSharedKeyCredential } from "@azure/storage-blob";

const account = "devstoreaccount1";
const accountKey =
  "Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==";

const blobServiceUri = `http://docker.host.internal:10000`;

const STORAGE_CONNECTION_STRING =
  "DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;BlobEndpoint=http://storage:10000/devstoreaccount1;";

export const useBlobStorage = async () => {
  // const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
  // const blobServiceClient = new BlobServiceClient(blobServiceUri, sharedKeyCredential);
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    STORAGE_CONNECTION_STRING
  );
  console.log(STORAGE_CONNECTION_STRING)

  let i = 1;
  let name = "";
  for await (const container of blobServiceClient.listContainers()) {
    console.log(`Container ${i++}: ${container.name}`);
    name = container.name
  }

  const createContainer = async (name: string) => {
    const container = await blobServiceClient.createContainer(name);
    return container;
  }

  return [name, {createContainer}] as const;
}
