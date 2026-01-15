
import { Button } from "@/components/ui/button"
import {
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


export default function AddProjects() {
    return (
        <div>
            <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle className='text-xl'>Add Projects</DialogTitle>
                </DialogHeader>

                {/* Projects Preview Card */}
                <div>
                    <CardHeader>
                        <CardTitle></CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {/* Title */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <Label>Title</Label>
                                <Input placeholder="Project title" />
                            </div>

                            {/* Work Sector (Dropdown from another API) */}
                            <div className="space-y-1">
                                <Label>Work Sector</Label>
                                <Select>
                                      <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select work sector" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">Human Resources & Recruitment</SelectItem>
                                        <SelectItem value="2">Software & IT</SelectItem>
                                        <SelectItem value="3">Finance</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>


                        {/* Dates */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <Label>Start Date</Label>
                                <Input type="date" />
                            </div>

                            <div className="space-y-1">
                                <Label>Completion Date</Label>
                                <Input type="date" />
                            </div>
                        </div>

                        {/* Ongoing */}
                        <div className="flex items-center space-x-2">
                            <Checkbox id="is_ongoing" />
                            <Label htmlFor="is_ongoing">Currently Working</Label>
                        </div>

                        {/* Summary */}
                        <div className="space-y-1">
                            <Label>Summary</Label>
                            <Textarea placeholder="Short summary..." />
                        </div>

                        {/* Responsibilities */}
                        <div className="space-y-1">
                            <Label>Responsibilities</Label>
                            <Textarea placeholder="Key responsibilities..." />
                        </div>

                        {/* Link */}
                        <div className="space-y-1">
                            <Label>Reference Link</Label>
                            <Input type="url" placeholder="https://example.com" />
                        </div>

                        {/* Reference Document */}
                        <div className="space-y-1">
                            <Label>Reference Document</Label>
                            <Input type="file" />
                        </div>

                        {/* Order */}
                        <div className="space-y-1">
                            <Label>Order</Label>
                            <Input type="number" placeholder="1" />
                        </div>

                    </CardContent>
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