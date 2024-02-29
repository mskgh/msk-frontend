export default async function VideoComponent() {
  const src = "https://www.youtube.com/embed/zcMFcAImWYc";

  return <iframe src={src} width="250" />;
}
