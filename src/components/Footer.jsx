"use client";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* ১. ওয়েবসাইট লোগো ও বর্ণনা */}
        <div>
          <h3 className="font-black text-2xl tracking-tighter mb-4">TilesGallery.</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            To make your home modern and aesthetic, we offer the best quality tile collection. Explore our gallery and choose the design that suits your taste.
          </p>
        </div>

        {/* ২. সোশ্যাল মিডিয়া লিংকস (Social Media) */}
        <div>
          <h4 className="font-bold text-lg mb-4">Follow Us</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li>
              <Link href="https://facebook.com" target="_blank" className="hover:text-primary transition-colors">
               <span className="flex items-center gap-2"><FaFacebook></FaFacebook> Facebook</span>
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com" target="_blank" className="hover:text-primary transition-colors">
                <span className="flex items-center gap-2"><GrInstagram /> Instagram</span>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com" target="_blank" className="hover:text-primary transition-colors">
              <span className="flex items-center gap-2"> <BsTwitter></BsTwitter> Twitter</span>
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-primary transition-colors">
               <span className="flex items-center gap-2"> <FaLinkedin /> LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* ৩. যোগাযোগ (Contact Us) */}
        <div>
          <h4 className="font-bold text-lg mb-4">Contact Us</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Email: support@tilesgallery.com</li>
            <li>Phone: +৮৮০ ১২৩৪-৫৬৭৮৯০</li>
            <li>Address: Ashuganj, Brahmanbaria, Bangladesh</li>
          </ul>
        </div>
      </div>

      <div className="w-full h-px bg-gray-300 my-6" />

      {/* কপিরাইট সেকশন */}
      <div className="text-center text-gray-400 text-xs">
        <p>© {new Date().getFullYear()} TilesGallery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;