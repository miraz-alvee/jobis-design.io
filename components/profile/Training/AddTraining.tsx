
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


export default function AddTraining() {
    return (
        <div>
            <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle className='text-xl'>Add Training</DialogTitle>
                </DialogHeader>


                {/* Education Preview Card */}
                <Card className="overflow-y-auto flex-1 px-1">
                    <CardHeader>
                        <CardTitle className="text-base">Education Details</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Program Type (Dropdown) */}
                            <div className="space-y-1 w-full">
                                <Label>Program Type</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select program type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="online_course">Online Course</SelectItem>
                                        <SelectItem value="training">Training</SelectItem>
                                        <SelectItem value="certification">Certification</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Course (Dropdown - another API later) */}
                            <div className="space-y-1">
                                <Label>Course</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select course" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">
                                            Go Beyond the Numbers: Translate Data into Insights
                                        </SelectItem>
                                        <SelectItem value="2">
                                            Google Data Analytics
                                        </SelectItem>
                                        <SelectItem value="3">
                                            Machine Learning Specialization
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div></div>

                        {/* Program Title */}
                        <div className="space-y-1">
                            <Label>Program Title</Label>
                            <Input placeholder="Go Beyond the Numbers..." />
                        </div>

                        {/* Organization */}
                        <div className="space-y-1">
                            <Label>Organization</Label>
                            <Input placeholder="Coursera" />
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

                         {/* Ongoing (Boolean) */}
                        <div className="flex items-center space-x-2">
                            <Checkbox id="is_ongoing" />
                            <Label htmlFor="is_ongoing">Currently Ongoing</Label>
                        </div>

                        {/* Reference URL */}
                        <div className="space-y-1">
                            <Label>Reference URL</Label>
                            <Input placeholder="https://example.com" />
                        </div>

                        {/* Summary */}
                        <div className="space-y-1">
                            <Label>Summary</Label>
                            <Textarea placeholder="Short description..." />
                        </div>
                        {/* Duration */}
                        <div className="space-y-1">
                            <Label>Duration</Label>
                            <Input placeholder="e.g. 6 weeks / 2 months" />
                        </div>

                        {/* Achievement Year */}
                        <div className="space-y-1">
                            <Label>Achievement Year</Label>
                            <Input type="number" placeholder="2025" />
                        </div>

                        {/* Summary */}
                        <div className="space-y-1">
                            <Label>Summary</Label>
                            <Textarea placeholder="Short description..." />
                        </div>

                        {/* Reference URL */}
                        <div className="space-y-1">
                            <Label>Reference URL</Label>
                            <Input type="url" placeholder="https://example.com" />
                        </div>

                        {/* Reference Document (File Upload) */}
                        <div className="space-y-1">
                            <Label>Reference Document</Label>
                            <Input type="file" />
                        </div>

                        {/* Display Order */}
                        <div className="space-y-1">
                            <Label>Order</Label>
                            <Input type="number" placeholder="1" />
                        </div>


                    </CardContent>
                </Card>

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