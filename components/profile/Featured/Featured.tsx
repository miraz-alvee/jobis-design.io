import { Briefcase, Calendar, MapPin, Pencil, Trash2, Plus } from 'lucide-react';

import { Dialog, DialogTrigger } from '@/components/ui/dialog';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import AddFeatured from './AddFeatured';


interface FeaturedItem {
    id: string;
    title: string;
    date: string;
    summary: string;
    description: string;
    reference_url: string;
    reference_document: string;
}

export default function Featured() {
    const experiences: FeaturedItem[] = [
        {
            id: '1',
            title: "Tech Innovators Under 35 - Tech Weekly Magazine",
            date: "2025-01-23",
            summary: "Tech Innovators Under 35 - Tech Weekly Magazine",
            description: "Tech Innovators Under 35 - Tech Weekly Magazine",
            reference_url: "https://sdfsd.cos",
            reference_document: "View Article",
        },
        {
            id: '2',
            title: "Tech Innovators Under 35 - Tech Weekly Magazine",
            date: "2025-01-23",
            summary: "Tech Innovators Under 35 - Tech Weekly Magazine",
            description: "Tech Innovators Under 35 - Tech Weekly Magazine",
            reference_url: "https://sdfsd.cos",
            reference_document: "View Article",

        },
    ];

    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Education</h2>
                <Dialog>
                    <form>
                        <DialogTrigger asChild>
                            <div className='flex gap-2 p-2 cursor-pointer hover:bg-red-200 rounded-lg transition-colors'>
                                <Plus size={24} />
                                <span className="font-medium">Add</span>
                            </div>
                        </DialogTrigger>
                        <AddFeatured></AddFeatured>
                    </form>
                </Dialog>
            </div>

            {/* Experience List */}
            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <div
                        key={exp.id}
                        className="relative pl-16 pb-8"
                    >
                        {/* Icon */}
                        <div className="absolute left-5 top-0 -ml-8.25">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                                <Briefcase className="w-5 h-6 text-blue-600" />
                            </div>
                        </div>

                        {/* Content Card */}
                        <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                            {/* Header with Edit/Delete */}
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {exp.title}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Dialog>
                                        <form>
                                            <DialogTrigger asChild>
                                                <div className='flex p-2 gap-2 cursor-pointer hover:bg-red-200 rounded-lg transition-colors'>
                                                    <Pencil className="w-5 h-5 text-gray-600" />
                                                </div>
                                            </DialogTrigger>
                                            {/* <EditEducation></EditEducation> */}
                                        </form>
                                    </Dialog>

                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <div className='flex p-2 gap-2 cursor-pointer hover:bg-red-500 rounded-lg transition-colors'>
                                                <Trash2 className="w-5 h-5 text-red-600 hover:text-white" />
                                            </div>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete your
                                                    account and remove your data from our servers.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction>Delete</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </div>

                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    <span>{exp.date}</span>
                                </div>

                                {/* {exp.program_type && (
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded">
                                        {exp.program_type}
                                    </span>
                                )} */}
                            </div>

                            {/* Key*/}
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {exp.summary}
                            </p>

                            {/* Description */}
                            <p className="text-red-400 leading-relaxed mb-4">
                                {exp.description}
                            </p>

                            {/* Description */}
                            <p className="text-blue-500 leading-relaxed mb-4">
                                {exp.reference_url}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

