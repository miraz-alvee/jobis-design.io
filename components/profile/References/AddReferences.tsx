
import { Button } from "@/components/ui/button"
import {
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export default function AddReferences() {
    return (
        <div>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle className='text-xl'>Add Education</DialogTitle>
                </DialogHeader>

                {/* Scrollable Form Content */}
                {/* Form Content */}
                <div className="p-6 space-y-4">
                    {/* Full Name - Required */}
                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="fullName"

                            placeholder="e.g., John Smith"
                            className={`w-full px-4 py-3 border 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none`}
                        />

                    </div>

                    {/* Designation - Required */}
                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Designation <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="designation"

                            placeholder="e.g., Senior Manager"
                            className={`w-full px-4 py-3 border 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none`}
                        />

                    </div>

                    {/* Organization Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Organization Name
                        </label>
                        <input
                            type="text"
                            name="organizationName"

                            placeholder="e.g., ABC Corporation"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                    </div>

                    {/* Organization Address */}
                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Organization Address
                        </label>
                        <input
                            type="text"
                            name="organizationAddress"

                            placeholder="e.g., New York, NY"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                    </div>

                    {/* Organization Website */}
                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Organization Website
                        </label>
                        <input
                            type="url"
                            name="organizationWebsite"

                            placeholder="https://organization.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                    </div>

                    {/* Phone and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Phone - Required */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"

                                placeholder="+1 234 567 8900"
                                className={`w-full px-4 py-3 border 'border-red-500' : 'border-gray-300'
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none`}
                            />

                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"

                                placeholder="email@example.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        </div>
                    </div>

                    {/* Relationship */}
                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Relationship
                        </label>
                        <input
                            type="text"
                            name="relationship"

                            placeholder="e.g., Former Manager, Colleague"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                    </div>
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </div>
    )
}