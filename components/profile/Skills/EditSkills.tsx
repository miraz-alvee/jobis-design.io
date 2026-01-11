import { Button } from '@/components/ui/button'
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React from 'react'

export default function EditSkills() {
    return (
        <div>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle className='text-xl'>Add Skills</DialogTitle>
                </DialogHeader>

                {/* Scrollable Form Content */}
                <div className="overflow-y-auto flex-1 px-1">
                    <div className="space-y-5">

                        {/* Degree/Certificate */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Degree/Certificate <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="title"
                                defaultValue="e.g., Software Engineer"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>


                        {/* Date of Birth and Gender */}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                               Beginner
                            </label>
                            <select
                                defaultValue="Full Time"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advancd</option>
                                <option>Expart</option>
                               
                            </select>
                        </div>
                    </div>
                </div>

                <DialogFooter className="mt-4">
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </div>
    )
}
