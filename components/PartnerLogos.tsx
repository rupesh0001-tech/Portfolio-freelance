import React from "react";

// Sub-components for individual inline SVG logos
function GoogleLogo() {
  return (
    <svg viewBox="0 0 80 24" className="h-6.5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* G */}
      <path d="M9 11.5c0-2.8 2.2-5 5-5 1.5 0 2.8.7 3.7 1.8l2.3-2.3C18.2 4 16.2 3 14 3c-4.7 0-8.5 3.8-8.5 8.5S9.3 20 14 20c2.5 0 4.5-1.2 5.8-3.1L17.5 15c-1 1.2-2.3 1.8-3.5 1.8-2.8 0-5-2.2-5-5.3z" fill="#4285F4"/>
      {/* o */}
      <path d="M26.5 11.5c0-1.8 1.4-3.2 3.2-3.2s3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2-3.2-1.4-3.2-3.2zm9 0c0-3.5-2.6-6-5.8-6s-5.8 2.5-5.8 6 2.6 6 5.8 6 5.8-2.5 5.8-6z" fill="#EA4335"/>
      {/* o */}
      <path d="M40.5 11.5c0-1.8 1.4-3.2 3.2-3.2s3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2-3.2-1.4-3.2-3.2zm9 0c0-3.5-2.6-6-5.8-6s-5.8 2.5-5.8 6 2.6 6 5.8 6 5.8-2.5 5.8-6z" fill="#FBBC05"/>
      {/* g */}
      <path d="M54.5 11.5c0-1.8 1.4-3.2 3.2-3.2s3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2-3.2-1.4-3.2-3.2zm9 0c0-3.5-2.6-6-5.8-6s-5.8 2.5-5.8 6v.5c-1.1-1.3-2.6-2-4-2-3.2 0-5.8 2.5-5.8 6s2.6 6 5.8 6c1.4 0 2.9-.7 4-2v1.5c0 2.2-1.8 4-4 4-1.8 0-3-.8-3.7-1.8l-2.3 2.3c1.5 2.1 3.8 3.1 6 3.1 4.7 0 8.5-3.8 8.5-8.5v-8.3h-2.9v1.2z" fill="#4285F4"/>
      {/* l */}
      <path d="M66.5 2.5h3v15h-3v-15z" fill="#34A853"/>
      {/* e */}
      <path d="M78 11.5h-7.5c0-1.8 1.4-3.2 3.2-3.2 1.5 0 2.8.9 3.3 2.1L79.8 9C78.8 6.5 76 5 73.5 5c-3.2 0-5.8 2.5-5.8 6s2.6 6 5.8 6c2.8 0 5-1.5 5.8-3.8l-2.8-.9c-.4 1.1-1.4 1.8-2.8 1.8-1.8 0-3.2-1.4-3.2-3.2H78z" fill="#EA4335"/>
    </svg>
  );
}

function TrelloLogo() {
  return (
    <div className="flex items-center gap-2.5 text-[#091E42]">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4.5" fill="#0079BF"/>
        <rect x="4.5" y="4.5" width="6" height="15" rx="1.5" fill="white"/>
        <rect x="13.5" y="4.5" width="6" height="8.5" rx="1.5" fill="white"/>
      </svg>
      <span className="font-extrabold text-2xl tracking-tighter text-neutral-800">Trello</span>
    </div>
  );
}

function MondayLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6.5C4 5.39543 4.89543 4.5 6 4.5H13C14.1046 4.5 15 5.39543 15 6.5C15 7.60457 14.1046 8.5 13 8.5H6C4.89543 8.5 4 7.60457 4 6.5Z" fill="#FF155A" />
        <path d="M6 12C6 10.8954 6.89543 10 8 10H15C16.1046 10 17 10.8954 17 12C17 13.1046 16.1046 14 15 14H8C6.89543 14 6 13.1046 6 12Z" fill="#FF9D00" />
        <path d="M8 17.5C8 16.3954 8.89543 15.5 10 15.5H17C18.1046 15.5 19 16.3954 19 17.5C19 18.6046 18.1046 19.5 17 19.5H10C8.89543 19.5 8 18.6046 8 17.5Z" fill="#00C875" />
      </svg>
      <span className="font-extrabold text-2xl tracking-tighter text-neutral-800">
        monday<span className="text-[#00C875] font-black">.</span>com
      </span>
    </div>
  );
}

function NotionLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="3.5" fill="#000000" stroke="#000000" strokeWidth="1"/>
        <rect x="4.5" y="4.5" width="15" height="15" rx="2" fill="white" />
        <path d="M7.5 7H9.8L14.2 14.5V7H16.5V17H14.2L9.8 9.5V17H7.5V7Z" fill="#000000" />
      </svg>
      <span className="font-extrabold text-2xl tracking-tighter text-neutral-800">Notion</span>
    </div>
  );
}

function SlackLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.04 15.12a2.52 2.52 0 1 1-2.52-2.52h2.52v2.52zm1.26 0a2.52 2.52 0 1 1 5.04 0v5.04a2.52 2.52 0 1 1-5.04 0v-5.04z" fill="#36C5F0"/>
        <path d="M8.88 5.04a2.52 2.52 0 1 1 2.52-2.52v2.52H8.88zm0 1.26a2.52 2.52 0 1 1 0 5.04H3.84a2.52 2.52 0 1 1 0-5.04h5.04z" fill="#2EB67D"/>
        <path d="M18.96 8.88a2.52 2.52 0 1 1 2.52 2.52h-2.52V8.88zm-1.26 0a2.52 2.52 0 1 1-5.04 0V3.84a2.52 2.52 0 1 1 5.04 0v5.04z" fill="#ECB22E"/>
        <path d="M15.12 18.96a2.52 2.52 0 1 1-2.52 2.52v-2.52h2.52zm0-1.26a2.52 2.52 0 1 1 0-5.04h5.04a2.52 2.52 0 1 1 0 5.04h-5.04z" fill="#E01E5A"/>
      </svg>
      <span className="font-black text-2xl tracking-tighter text-neutral-800 lowercase">slack</span>
    </div>
  );
}

export default function PartnerLogos() {
  return (
    <section className="bg-white py-8 md:py-8 border-y border-neutral-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
          
          <div className="flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-200">
            <GoogleLogo />
          </div>

          <div className="flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-200 select-none">
            <TrelloLogo />
          </div>

          <div className="flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-200 select-none">
            <MondayLogo />
          </div>

          <div className="flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-200 select-none">
            <NotionLogo />
          </div>

          <div className="flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-200 select-none">
            <SlackLogo />
          </div>

        </div>
      </div>
    </section>
  );
}
