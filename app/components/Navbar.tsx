"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ModeToggle";
import { Home, User, Folder, Contact } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  
  const navItems = [
    { id: "home", label: "Home", icon: Home, href: "/" },
    { id: "about", label: "About", icon: User, href: "/about" },
    { id: "projects", label: "Projects", icon: Folder, href: "/projects" },
    { id: "contact", label: "Contact", icon: Contact, href: "/contact" },
  ];

  // Determine active tab based on current pathname
  const getActiveTab = () => {
    if (pathname === "/") return "home";
    if (pathname === "/about") return "about";
    if (pathname === "/projects") return "projects";
    if (pathname === "/contact") return "contact";
    return "home"; // fallback
  };

  const activeTab = getActiveTab();

  return (
    <nav className="flex justify-between items-center w-full py-3 px-6 backdrop-blur-2xl bg-white/80 dark:bg-black/80 rounded-3xl mx-4 mt-4">
      {/* Logo */}
      <a aria-label="Homepage" className="hidden size-8 md:block md:size-9" href="/">
        <svg className="size-[50px]" viewBox="0 0 1184 864">
          <path
            className="fill-black dark:fill-white"
            d="M 723.702 188.631 C 723.316 189.017, 723 207.708, 723 230.167 L 723 271 728.466 271 C 742.046 271, 766.163 276.010, 780.732 281.857 C 827.131 300.479, 862.060 342.237, 873.117 392.306 C 874.549 398.788, 875.307 406.810, 875.688 419.500 C 876.152 434.931, 875.927 439.266, 874.115 449.871 C 871.811 463.356, 866.859 479.375, 862.046 488.908 C 859.202 494.542, 859.110 495.048, 860.742 496.025 C 869.382 501.194, 930.387 534.946, 930.638 534.696 C 930.817 534.516, 932.942 530.124, 935.359 524.935 C 949.314 494.981, 956.341 465.564, 957.679 431.500 C 959.399 387.735, 947.048 340.199, 924.034 302 C 889.747 245.092, 834.136 205.536, 771 193.147 C 755.521 190.109, 725.126 187.207, 723.702 188.631 M 331 425 L 331 661 372.497 661 L 413.994 661 414.247 494.897 L 414.500 328.794 445.441 369.647 C 492.975 432.408, 507.266 451, 507.972 451 C 508.329 451, 515.119 442.580, 523.060 432.288 C 531.002 421.997, 542.918 406.585, 549.541 398.038 C 556.163 389.492, 569.988 371.475, 580.263 358 C 590.538 344.525, 600.066 332.150, 601.436 330.500 L 603.928 327.500 603.964 422.750 C 603.984 475.138, 603.831 518, 603.625 518 C 602.744 518, 592.887 502.815, 588.695 495 C 578.121 475.287, 571.938 452.735, 570.753 429.558 L 570.500 424.616 567.880 428.558 C 566.439 430.726, 551.704 449.600, 535.135 470.500 C 518.566 491.400, 505.010 509.175, 505.010 510 C 505.012 512.829, 518.683 538.774, 526.160 550.137 C 543.135 575.936, 570.622 603.677, 595.102 619.715 L 603.932 625.500 603.966 643.250 L 604 661 645.500 661 L 687 661 687 425 L 687 189 647.750 189.055 L 608.500 189.110 591 212.290 C 581.375 225.038, 566.363 244.926, 557.640 256.485 C 520.667 305.474, 508.625 321.040, 507.898 320.778 C 507.474 320.625, 501.836 313.525, 495.369 305 C 476.755 280.463, 431.830 220.965, 419.294 204.250 L 407.858 189 369.429 189 L 331 189 331 425 M 837.013 526.553 C 822.826 543.079, 802.873 557.394, 782.069 565.972 C 766.709 572.305, 744.904 576.989, 730.750 576.996 L 723 577 723 619.150 L 723 661.300 736.250 660.708 C 782.087 658.661, 828.873 640.897, 867.173 611 C 879.237 601.583, 899.341 581.085, 908.312 569.057 L 916.074 558.649 913.287 556.971 C 911.754 556.048, 897.450 547.964, 881.500 539.006 C 865.550 530.048, 850.665 521.660, 848.422 520.366 L 844.345 518.012 837.013 526.553"
            stroke="none"
            fillRule="evenodd"
          />
        </svg>
      </a>

      {/* Your Original Navigation with Morphing Effect */}
      <div className="relative flex justify-center mx-auto">
        <ul className="relative flex min-h-10 items-center justify-center rounded-[22px] bg-black/30 px-1 py-1 shadow-border backdrop-blur-2xl dark:bg-white/10">
          <div className="flex items-center opacity-100 blur-0">
            {navItems.map((item) => (
              <li key={item.id} className="relative list-none">
                <Link 
                  className={`block px-4 py-1.5 font-light text-sm transition hover:text-white dark:text-white/70 ${
                    activeTab === item.id ? 'text-white' : 'text-white/70'
                  }`}
                  href={item.href}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </div>
                </Link>
                {activeTab === item.id && (
                  <span className="-z-10 absolute inset-0 w-full rounded-full bg-black/15 dark:bg-white/10">
                    <div className="-top-[8px] -translate-x-1/2 absolute left-1/2 h-1 w-8 rounded-t-full bg-primary">
                      <div className="-top-2 -left-2 absolute h-6 w-12 rounded-full bg-primary/20 blur-md"></div>
                      <div className="-top-1 absolute h-6 w-8 rounded-full bg-primary/20 blur-md"></div>
                      <div className="absolute top-0 left-2 h-4 w-4 rounded-full bg-primary/20 blur-sm"></div>
                    </div>
                  </span>
                )}
              </li>
            ))}
          </div>
        </ul>
      </div>

      {/* Theme Toggle */}
      <div className="flex items-center space-x-4">
        <ThemeToggle />
      </div>
    </nav>
  );
}