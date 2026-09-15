import { useState } from "react";

const YoutubeSection = () => {
  const videos = [
    {
      title: "Understanding Back & Spine Pain",
      category: "Spine Care",
      videoId: "YOUR_VIDEO_ID_1",
    },
    {
      title: "Why Personalised Care Matters",
      category: "Expert Advice",
      videoId: "YOUR_VIDEO_ID_2",
    },
    {
      title: "Common Causes of Knee Pain",
      category: "Knee Care",
      videoId: "YOUR_VIDEO_ID_3",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section className="bg-[#FAF7F9] px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-7 flex flex-col gap-3 sm:mb-9 sm:gap-4 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#AE2580]">
              Watch & Learn
            </p>

            <h2 className="mt-2 text-3xl font-bold leading-tight text-[#252525] sm:mt-3 sm:text-4xl">
              Real knowledge.
              <span className="text-[#AE2580]"> Real trust.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500 md:text-right">
            Helpful conversations and expert insights to help you understand
            your condition and make informed decisions about your care.
          </p>

        </div>

        {/* Main Video + Side Videos */}
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.55fr_0.8fr]">

          {/* Main Video */}
          <div className="group relative overflow-hidden rounded-2xl bg-[#252525] sm:rounded-[24px]">

            <div className="relative aspect-[16/9] overflow-hidden">

              <iframe
                key={activeVideo.videoId}
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

            </div>

            {/* Video Info */}
            <div className="border-t border-white/10 bg-[#252525] px-5 py-4 sm:px-6 sm:py-5 md:px-7">

              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#D88BC0] sm:mb-2 sm:text-[11px]">
                {activeVideo.category}
              </p>

              <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
                {activeVideo.title}
              </h3>

            </div>

          </div>

          {/* Side Videos */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">

            {videos
              .filter((video) => video.videoId !== activeVideo.videoId)
              .map((video, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  className="
                    group
                    flex
                    min-h-[115px]
                    flex-1
                    gap-3
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-2.5
                    text-left
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg

                    sm:min-h-[130px]
                    sm:gap-4
                    sm:rounded-[22px]
                    sm:p-3
                  "
                >

                  {/* Thumbnail */}
                  <div className="relative w-[38%] shrink-0 overflow-hidden rounded-xl sm:w-[42%] sm:rounded-[16px]">

                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                      alt={video.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Play Icon */}
                    <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[10px] text-[#AE2580] shadow-md sm:h-9 sm:w-9 sm:text-xs">
                      ▶
                    </div>

                  </div>

                  {/* Content */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center">

                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#AE2580] sm:text-[10px] sm:tracking-[0.15em]">
                      {video.category}
                    </p>

                    <h3 className="mt-1.5 line-clamp-2 text-xs font-bold leading-4 text-[#252525] transition group-hover:text-[#AE2580] sm:mt-2 sm:text-sm sm:leading-5 md:text-base">
                      {video.title}
                    </h3>

                    <span className="mt-2 text-[10px] font-medium text-gray-400 sm:mt-3 sm:text-xs">
                      Play video →
                    </span>

                  </div>

                </button>
              ))}

          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-6 flex flex-col gap-2 border-t border-gray-200 pt-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-5">

          <p className="text-[11px] text-gray-400 sm:text-xs">
            More conversations & insights on our YouTube channel
          </p>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-[#AE2580] transition hover:opacity-70 sm:text-sm"
          >
            Visit Channel ↗
          </a>

        </div>

      </div>
    </section>
  );
};

export default YoutubeSection;