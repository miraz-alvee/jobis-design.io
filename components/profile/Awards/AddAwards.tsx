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


export default function AddAwards() {
    return (
        <div>
            <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle className='text-xl'>Add Award/Honor</DialogTitle>
                </DialogHeader>

                {/* Projects Preview Card */}
                <div>
                    <CardHeader>
                        <CardTitle></CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {/* Title */}

                        <div className="space-y-1">
                            <Label>Title</Label>
                            <Input placeholder="e.g., Employee of the Year" />
                        </div>

                        {/* Work Sector (Dropdown from another API) */}
                        <div className="space-y-1">
                            <Label>Recognition Type</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select work sector" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Awards</SelectItem>
                                    <SelectItem value="2">Awards</SelectItem>
                                    <SelectItem value="3">Awards</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-1">
                            <Label>Organization Name</Label>
                            <Input placeholder="e.g., ABC Corporation" />
                        </div>

                        <div className="space-y-1">
                            <Label>Organization Address</Label>
                            <Input placeholder="e.g., New York, NY" />
                        </div>

                        {/* Link */}
                        <div className="space-y-1">
                            <Label>Organization Link</Label>
                            <Input type="url" placeholder="https://example.com" />
                        </div>

                        <div className="space-y-1">
                            <Label>Achievemnt Year</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select work sector" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">2020</SelectItem>
                                    <SelectItem value="2">20202</SelectItem>
                                    <SelectItem value="3">2020</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Summary */}
                        <div className="space-y-1">
                            <Label>Summary</Label>
                            <Textarea placeholder="Short summary..." />
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

                <DialogFooter className="mt-4 mb-5">
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </div>
    )
}
