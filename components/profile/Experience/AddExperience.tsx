
import { Button } from "@/components/ui/button"
import {
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function AddExperience() {
    return (
        <div>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle className='text-xl'>Add Work Experience</DialogTitle>
                </DialogHeader>

                {/* Scrollable Form Content */}
                <div className="overflow-y-auto flex-1 px-1">
                    <div className="space-y-5">

                        {/* Job Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Job Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="title"
                                defaultValue="e.g., Software Engineer"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* company Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                company Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="name"
                                defaultValue="e.g., Google Inc."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* company Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                company Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="address"
                                defaultValue="e.g., Mountain View, CA"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* company Website */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                company Website <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="website"
                                defaultValue="https://company.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Job Type
                            </label>
                            <select
                                defaultValue="Full Time"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option>Full Time</option>
                                <option>Remote</option>
                                <option>Hybrid</option>
                                <option>Intern</option>
                                <option>Prefer not to say</option>
                            </select>
                        </div>

                        {/* Date of Birth and Gender */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Start Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    defaultValue="1991-10-10"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    End Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    defaultValue="1991-10-10"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Check Box */}
                        <div className="flex items-center gap-3">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">I currently work here</Label>
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