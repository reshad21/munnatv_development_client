"use client";

import { useState, useTransition } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { showErrorToast, showSuccessToast } from "@/utils/toastMessage";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { deleteTeam } from "@/services/teams";

const DeleteTeam = ({ id }: { id?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    if (!id) return;

    startTransition(async () => {
      const result = await deleteTeam(id);

      if (result.statusCode === 200) {
        setIsOpen(false);
        showSuccessToast(result.message);
      } else {
        setIsOpen(false);
        showErrorToast(result.message);
      }
    });
  };

  return (
    <>
      <DropdownMenuItem
        className="cursor-pointer text-red-600 focus:text-red-600"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
      >
        <Trash2 className="mr-2 h-4 w-4" />
        Delete
      </DropdownMenuItem>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete this
              team member and remove your data from our servers.
            </DialogDescription>
            <div className="flex justify-end space-x-2 mt-6">
              <DialogClose asChild>
                <Button variant="outline" className="cursor-pointer">
                  Cancel
                </Button>
              </DialogClose>

              <Button
                onClick={handleDelete}
                disabled={isPending}
                variant="destructive"
                className="cursor-pointer"
              >
                {isPending ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteTeam;
