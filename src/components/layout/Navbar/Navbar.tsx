import { Container } from "../Container";
import { Brand } from "./Brand";
import { NavLinks } from "./NavLinks";
import { NavPill } from "./NavPill";
import { navItems } from "../../../data/nav";
import { Button } from "../../ui/Button";
import { Download, Menu } from "lucide-react";
import { cn } from "../../../lib/cn";
import { useScrolled } from "../../../hooks/useScrolled";
import { MobileMenu } from "./MobileMenu";
import { useRef, useState } from "react";

export function Navbar() {
  const scrolled = useScrolled(12);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null!);
  const menuId = "mobile-menu";

  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 inset-x-0 z-[100] w-full border-b border-black/5 bg-white/70 backdrop-blur-md transition-shadow",
        scrolled && "border-black/10 shadow-sm",
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Brand />

          <div className="hidden md:block">
            <NavPill>
              <NavLinks items={navItems} activeHref="#how-it-works" />
            </NavPill>
          </div>

          <Button variant="primary" size="md" className="hidden sm:flex">
            <Download className="h-4 w-4" />
            <span className="hidden lg:inline">Download App</span>
            <span className="lg:hidden">Download</span>
          </Button>

          <button
            ref={menuButtonRef}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-gray-900 transition-colors hover:bg-gray-100 sm:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={handleOpenMenu}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </Container>

      <MobileMenu
        id={menuId}
        open={menuOpen}
        onClose={handleCloseMenu}
        items={navItems}
        returnFocusRef={menuButtonRef}
      />
    </header>
  );
}
