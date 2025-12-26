import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#143944] text-[#F4F6F5] py-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">

                {/* Logo Section */}
                <img
                    src="/img/logo.png"
                    alt="LockWind Logo"
                    className="rounded-md"
                />

                {/* Links Sections */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Company</h3>
                        <Link href="/about">About Us</Link>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/blog">Blog</Link>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Legal</h3>
                        <Link href="/privacy">Privacy</Link>
                        <Link href="/terms">Terms of Service</Link>
                        <Link href="/guidelines">Content Guidelines</Link>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">How it Works</h3>
                        <Link href="/platform">How the platform works</Link>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-10 text-center text-sm text-[#DBE2DC]">
                &copy; 2025 LockWind. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
