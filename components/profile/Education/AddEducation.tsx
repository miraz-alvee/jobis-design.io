
import { Button } from "@/components/ui/button"
import {
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export default function AddEducation() {
    return (
        <div>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle className='text-xl'>Add Education</DialogTitle>
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

                        {/* Subject/Major */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Subject/Major <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="name"
                                defaultValue="e.g., Google Inc."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Institute Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Institute Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="address"
                                defaultValue="e.g., Mountain View, CA"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Institute Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Institute Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="website"
                                defaultValue="https://company.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>


                        {/* Date of Birth and Gender */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    2026
                                </label>
                                <select
                                    defaultValue="Full Time"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option>2026</option>
                                    <option>2026</option>
                                    <option>2026</option>
                                    <option>2026</option>
                                    <option>2026</option>
                                </select>
                            </div>
                           
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Result/Grade <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="result"
                                    defaultValue="e.g., 3.8 GPA, First Class"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Professional Summary */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Responsibilities
                            </label>
                            <textarea
                                rows={4}
                                defaultValue="."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            />
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