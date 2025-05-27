export default function Video({ videoPath, title, subtitle } : { videoPath: string, title?: string, subtitle?: string }) {
  title    ||= "🎬 You can watch the video below to learn step by step."
  subtitle ||= ""
 
  return (
    <>
      <h2 className="text-xl font-semibold mb-2 mt-4">{ title }</h2>
      <h2 className="text-lg font-semibold mb-2 mt-4">{ subtitle }</h2>

      <div className="mb-4 rounded overflow-hidden shadow">
        <video
          src={`${import.meta.env.BASE_URL}/videos/${videoPath}.mp4`}
          muted
          loop
          playsInline
          controls
        />
      </div>
    </>
  )
}
