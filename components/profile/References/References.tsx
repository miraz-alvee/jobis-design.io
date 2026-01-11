import { Pencil, Trash2, Plus, Phone, Mail, MapPin, Briefcase, ExternalLink, UserCircle } from 'lucide-react';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import AddReferences from './AddReferences';
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
import EditReferences from './EditReferences';

interface Reference {
    id: string;
    name: string;
    title: string;
    company: string;
    phone: string;
    email: string;
    location: string;
    relationship: string;
    website?: string;
}

export default function References() {
    const references: Reference[] = [
        {
            id: '1',
            name: 'Dr. Sarah Johnson',
            title: 'VP of Engineering',
            company: 'TechCorp Solutions',
            phone: '+1 415 555 0123',
            email: 'sarah.johnson@techcorp.com',
            location: 'San Francisco, CA',
            relationship: 'Current Manager',
            website: 'https://techcorp.com/sarah',
        },
        {
            id: '2',
            name: 'Michael Chen',
            title: 'Senior Engineering Manager',
            company: 'StartupHub Inc.',
            phone: '+1 212 555 0456',
            email: 'michael.chen@startuphub.com',
            location: 'New York, NY',
            relationship: 'Former Manager',
            website: 'https://startuphub.com/michael',
        },
        {
            id: '3',
            name: 'Dr. Ahmed Rahman',
            title: 'Professor of Computer Science',
            company: 'Bangladesh University of Engineering and Technology',
            phone: '+880 1712 345678',
            email: 'ahmed.rahman@buet.ac.bd',
            location: 'Dhaka, Bangladesh',
            relationship: 'Academic Advisor',
            website: 'https://buet.ac.bd/rahman',
        },
        {
            id: '4',
            name: 'Jennifer Martinez',
            title: 'Tech Lead',
            company: 'Digital Solutions Ltd.',
            phone: '+880 1798 765432',
            email: 'jennifer.martinez@digitalsolutions.com',
            location: 'Dhaka, Bangladesh',
            relationship: 'Former Colleague',
            website: 'https://digitalsolutions.com/jennifer',
        },
    ];

    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">References</h2>
                <Dialog>
                    <form>
                        <DialogTrigger asChild>
                            <div className='flex gap-2 p-2 cursor-pointer hover:bg-red-200 rounded-lg transition-colors'>
                                <Plus size={24} />
                                <span className="font-medium">Add</span>
                            </div>
                        </DialogTrigger>
                        <AddReferences></AddReferences>
                    </form>
                </Dialog>
            </div>

            {/* References Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {references.map((reference) => (
                    <div
                        key={reference.id}
                        className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                        {/* Header with Avatar and Actions */}
                        <div className="flex items-start gap-4 mb-4">
                            {/* Avatar */}
                            <div className="shrink-0">
                                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                                    <UserCircle className="w-8 h-8 text-gray-500" />
                                </div>
                            </div>

                            {/* Name, Title, and Actions */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between mb-1">
                                    <h3 className="text-lg font-bold text-gray-900 truncate">
                                        {reference.name}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <Dialog>
                                            <form>
                                                <DialogTrigger asChild>
                                                    <div className='flex p-2 gap-2 cursor-pointer hover:bg-red-200 rounded-lg transition-colors'>
                                                        <Pencil className="w-5 h-5 text-gray-600" />
                                                    </div>
                                                </DialogTrigger>
                                                <EditReferences />
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
                                <p className="text-blue-600 font-medium text-sm mb-2">
                                    {reference.title}
                                </p>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-3">
                            {/* Company */}
                            <div className="flex items-start gap-3 text-sm">
                                <Briefcase className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                                <span className="text-gray-700">{reference.company}</span>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3 text-sm">
                                <Phone className="w-4 h-4 text-gray-500 shrink-0" />
                                <span className="text-gray-700">{reference.phone}</span>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-3 text-sm">
                                <Mail className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                                <span className="text-gray-700 break-all">{reference.email}</span>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-3 text-sm">
                                <MapPin className="w-4 h-4 text-gray-500 shrink-0" />
                                <span className="text-gray-700">{reference.location}</span>
                            </div>
                        </div>

                        {/* Relationship */}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="text-sm">
                                <span className="text-gray-500">Relationship: </span>
                                <span className="text-gray-700 font-medium">
                                    {reference.relationship}
                                </span>
                            </div>
                        </div>

                        {/* Website Link */}
                        {reference.website && (
                            <div className="mt-3">
                                <a
                                    href={reference.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Website</span>
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
