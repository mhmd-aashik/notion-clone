import React from "react";
import NewDocumentButton from "./NewDocumentButton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const Sidebar = () => {
  const menuOptions = (
    <>
      <NewDocumentButton />

      {/* My docs */}
      {/* List */}
      {/* Shared with me */}
      {/* List... */}
    </>
  );

  return (
    <div className="bg-gray-300 p-2 md:p-5">
      <Sheet>
        <div className="md:hidden">
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <div className="">{/* Options */}</div>
              <SheetTitle>Menu</SheetTitle>
              <div>{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </div>
      </Sheet>
      <div className="hidden md:inline">{menuOptions}</div>
    </div>
  );
};

export default Sidebar;
