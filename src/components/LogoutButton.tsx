"use client";

export default function LogoutButton() {
  return (
    <a
      href="/auth/logout"
      className="w-full text-center inline-block px-6 py-3 bg-green-600 hover:bg-green-200 text-[#ffffff] font-medium rounded text-[14px] transition-colors"
    >
      Logout
    </a>
  );
}