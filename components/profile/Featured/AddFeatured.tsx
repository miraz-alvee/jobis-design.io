import { Button } from "@/components/ui/button"
import {
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


export default function AddFeatured() {
    return (
        <div>
            <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle className='text-xl'>Featured On</DialogTitle>
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
                            <Input placeholder="e.g., Interview with Tech Magazine" />
                        </div>
                       
                        <div className="space-y-1">
                            <Label>Date</Label>
                            <Input type="date" />
                        </div>

                        <div className="space-y-1">
                            <Label>Organization Name</Label>
                            <Input placeholder="e.g., ABC Corporation" />
                        </div>

                        <div className="space-y-1">
                            <Label>Organization Address</Label>
                            <Input placeholder="e.g., New York, NY" />
                        </div>

                        {/* Summary */}
                        <div className="space-y-1">
                            <Label>Summary</Label>
                            <Textarea placeholder="Short summary..." />
                        </div>

                        {/* Description */}
                        <div className="space-y-1">
                            <Label>Description</Label>
                            <Textarea placeholder="Detailed description..." />
                        </div>

                        {/* Link */}
                        <div className="space-y-1">
                            <Label>Organization Link</Label>
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

