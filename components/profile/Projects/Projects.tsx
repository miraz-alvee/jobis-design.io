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
import AddProjects from './AddProjects';


interface WorkSector {
    id: number;
    name: string;
}

interface ProjectItem {
    id: number;
    title: string;
    work_sector: WorkSector;
    starting_date: string;
    completion_date: string;
    summary: string;
    responsibilities: string;
    link: string;

}

export default function Projects() {
    const experiences: ProjectItem[] = [
        {
            id: 1,
            title: 'Pet Messageing',
            work_sector: {
                id: 4,
                name: "Human Resources & Recruitment"
            },
            starting_date: 'Mar 2021',
            completion_date: 'Mar 2022',
            responsibilities: 'Dean\'s List for 4 consecutive semesters. Led university programming club with 200+ members. Won 1st place in National Hackathon 2014. Published research paper on machine learning algorithms.',
            summary: "View Certificate",
            link: "View Project",
        },
        {
            id: 2,
            title: 'AI Itinerary',
            work_sector: {
                id: 4,
                name: "Human Resources & Recruitment"
            },
            starting_date: 'Mar 2021',
            completion_date: 'Mar 2022',
            summary: 'Dean\'s List for 4 consecutive semesters. Led university programming club with 200+ members. Won 1st place in National Hackathon 2014. Published research paper on machine learning algorithms.',
            responsibilities: "View Certificate",
            link: "View Project",
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
                        <AddProjects></AddProjects>
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
                                    <p className="text-blue-600 font-medium">{exp.work_sector.name}</p>

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
                                    <span>{exp.starting_date} - {exp.completion_date}</span>
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
                            <p className="text-blue-500 leading-relaxed mb-4">
                                {exp.responsibilities}
                            </p>
                            {/* Description */}
                            <p className="text-blue-500 leading-relaxed mb-4">
                                {exp.link}
                            </p>
                            

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
