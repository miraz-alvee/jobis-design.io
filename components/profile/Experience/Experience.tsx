import { Briefcase, Calendar, MapPin, Globe, Pencil, Trash2, Plus } from 'lucide-react';
import AddExperience from './AddExperience';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import EditExperience from './EditExperience';
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

interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    location: string;
    employmentType: string;
    status?: string;
    description: string;
    website?: string;
}

export default function Experience() {
    const experiences: ExperienceItem[] = [
        {
            id: '1',
            title: 'Senior Software Engineer',
            company: 'TechCorp Solutions',
            startDate: 'Mar 2021',
            endDate: 'Present',
            location: 'San Francisco, CA',
            employmentType: 'Full Time',
            status: 'Current',
            description: 'Lead development of microservices architecture serving 2M+ users. Mentor team of 5 junior developers. Design and implement CI/CD pipelines reducing deployment time by 60%. Collaborate with product team on feature planning and technical roadmap. Conduct code reviews and establish best practices.',
            website: 'https://techcorp.com'
        },
        {
            id: '2',
            title: 'Full Stack Developer',
            company: 'StartupHub Inc.',
            startDate: 'Jun 2018',
            endDate: 'Feb 2021',
            location: 'New York, NY',
            employmentType: 'Full Time',
            description: 'Built and maintained React-based dashboard used by 500+ enterprise clients. Developed RESTful APIs with Node.js and Express. Implemented real-time features using WebSockets. Optimized database queries improving response time by 40%. Participated in agile ceremonies and sprint planning.',
            website: 'https://startuphub.com'
        },
        {
            id: '3',
            title: 'Junior Software Developer',
            company: 'Digital Solutions Ltd.',
            startDate: 'Jan 2016',
            endDate: 'May 2018',
            location: 'Dhaka, Bangladesh',
            employmentType: 'Full Time',
            description: 'Developed responsive web applications using React and Vue.js. Created RESTful APIs with Django and Flask. Collaborated with designers to implement pixel-perfect UI components. Fixed bugs and implemented new features based on client feedback. Wrote unit tests achieving 80% code coverage.',
            website: 'https://digitalsolutions.com'
        },
        {
            id: '4',
            title: 'Software Development Intern',
            company: 'Tech Innovators',
            startDate: 'Jun 2015',
            endDate: 'Dec 2015',
            location: 'Dhaka, Bangladesh',
            employmentType: 'Internship',
            description: 'Assisted senior developers in building web applications. Learned modern JavaScript frameworks and best practices. Participated in daily standups and code reviews. Created documentation for internal tools. Gained hands-on experience with Git version control.',
        }
    ];

    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
                <Dialog>
                    <form>
                        <DialogTrigger asChild>
                            <div className='flex gap-2 p-2 cursor-pointer hover:bg-red-200 rounded-lg transition-colors'>
                                <Plus size={24} />
                                <span className="font-medium">Add</span>
                            </div>
                        </DialogTrigger>
                        <AddExperience></AddExperience>
                    </form>
                </Dialog>
            </div>

            {/* Experience List */}
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div
                        key={exp.id}
                        className="relative pl-16 pb-8 border-l-3 border-gray-200"
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
                                    <p className="text-blue-600 font-medium">{exp.company}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Dialog>
                                        <form>
                                            <DialogTrigger asChild>
                                                <div className='flex p-2 gap-2 cursor-pointer hover:bg-red-200 rounded-lg transition-colors'>
                                                    <Pencil className="w-5 h-5 text-gray-600" />
                                                </div>
                                            </DialogTrigger>
                                            <EditExperience></EditExperience>
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
                                    <span>{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MapPin className="w-4 h-4" />
                                    <span>{exp.location}</span>
                                </div>
                                <span className="px-3 py-1 bg-gray-200 rounded text-gray-700">
                                    {exp.employmentType}
                                </span>
                                {exp.status && (
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded">
                                        {exp.status}
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {exp.description}
                            </p>

                            {/* Website Link */}
                            {exp.website && (
                                <a
                                    href={exp.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                                >
                                    <Globe className="w-4 h-4" />
                                    <span>Website</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
