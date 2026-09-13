
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
    <section className="bg-[#FAF7F9] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#AE2580]">
              Watch & Learn
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#252525] md:text-4xl">
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
        <div className="grid gap-5 lg:grid-cols-[1.55fr_0.8fr]">

          {/* Main Video */}
          <div className="group relative overflow-hidden rounded-[24px] bg-[#252525]">

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
            <div className="border-t border-white/10 bg-[#252525] px-6 py-5 md:px-7">

              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#D88BC0]">
                {activeVideo.category}
              </p>

              <h3 className="text-xl font-bold text-white md:text-2xl">
                {activeVideo.title}
              </h3>

            </div>

          </div>

          {/* Side Videos */}
          <div className="flex flex-col gap-5">

            {videos
              .filter((video) => video.videoId !== activeVideo.videoId)
              .map((video, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  className="group flex flex-1 gap-4 rounded-[22px] border border-gray-200 bg-white p-3 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Thumbnail */}
                  <div className="relative w-[42%] shrink-0 overflow-hidden rounded-[16px]">

                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                      alt={video.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Play Icon */}
                    <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-xs text-[#AE2580] shadow-md">
                      ▶
                    </div>

                  </div>

                  {/* Content */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center">

                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#AE2580]">
                      {video.category}
                    </p>

                    <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-5 text-[#252525] transition group-hover:text-[#AE2580] md:text-base">
                      {video.title}
                    </h3>

                    <span className="mt-3 text-xs font-medium text-gray-400">
                      Play video →
                    </span>

                  </div>

                </button>
              ))}

          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-5">

          <p className="text-xs text-gray-400">
            More conversations & insights on our YouTube channel
          </p>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold text-[#AE2580] transition hover:opacity-70"
          >
            Visit Channel ↗
          </a>

        </div>

      </div>
    </section>
  );
};

export default YoutubeSection;
