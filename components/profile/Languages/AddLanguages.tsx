import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'

export default function AddLanguages() {
    return (
        <div>
            <DialogContent className="sm:max-w-2xl flex flex-col">
                <DialogHeader>
                    <DialogTitle className='text-xl'>Add Languages</DialogTitle>
                </DialogHeader>

                {/* Scrollable Form Content */}
                <div className="px-1">
                    <div className="space-y-5">

                        {/* Degree/Certificate */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                languages <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="title"
                                defaultValue="e.g., Software Engineer"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

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

                        <div className=' grid grid-cols-2 gap-8 mt-5'>
                            <div className="flex items-center gap-3">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms">Reading</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms">Listening</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms">Writing</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms">Speaking</Label>
                            </div>

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
