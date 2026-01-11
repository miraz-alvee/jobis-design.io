import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Pencil, Trash2, Plus } from 'lucide-react';
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
import AddSkills from './AddSkills';
import EditSkills from './EditSkills';

interface Skill {
    id: string;
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
    percentage: number;
}

export default function Skills() {
    const skills: Skill[] = [
        { id: '1', name: 'JavaScript', level: 'Expert', percentage: 95 },
        { id: '2', name: 'TypeScript', level: 'Expert', percentage: 95 },
        { id: '3', name: 'React', level: 'Expert', percentage: 90 },
        { id: '4', name: 'Node.js', level: 'Expert', percentage: 90 },
        { id: '5', name: 'Python', level: 'Advanced', percentage: 80 },
        { id: '6', name: 'AWS', level: 'Advanced', percentage: 75 },
        { id: '7', name: 'Docker', level: 'Advanced', percentage: 80 },
        { id: '8', name: 'PostgreSQL', level: 'Advanced', percentage: 75 },
        { id: '9', name: 'GraphQL', level: 'Advanced', percentage: 75 },
        { id: '10', name: 'MongoDB', level: 'Intermediate', percentage: 65 },
        { id: '11', name: 'Kubernetes', level: 'Intermediate', percentage: 60 },
        { id: '12', name: 'Go', level: 'Intermediate', percentage: 60 },
    ];

    const getProgressColor = (level: string) => {
        switch (level) {
            case 'Expert':
                return 'bg-purple-600';
            case 'Advanced':
                return 'bg-green-600';
            case 'Intermediate':
                return 'bg-blue-600';
            case 'Beginner':
                return 'bg-gray-600';
            default:
                return 'bg-gray-600';
        }
    };

    // Split skills into two columns
    const leftColumnSkills = skills.filter((_, index) => index % 2 === 0);
    const rightColumnSkills = skills.filter((_, index) => index % 2 === 1);

    const SkillItem = ({ skill }: { skill: Skill }) => (
        <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            {/* Skill Name and Actions */}
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                <div className="flex items-center gap-2">
                    <Dialog>
                        <form>
                            <DialogTrigger asChild>
                                <div className='flex p-2 gap-2 cursor-pointer hover:bg-red-200 rounded-lg transition-colors'>
                                    <Pencil className="w-5 h-5 text-gray-600" />
                                </div>
                            </DialogTrigger>
                            <EditSkills />
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

            {/* Progress Bar */}
            <div className="mb-2">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className={`h-full ${getProgressColor(skill.level)} transition-all duration-500`}
                        style={{ width: `${skill.percentage}%` }}
                    />
                </div>
            </div>

            {/* Level Label */}
            <div className="text-right">
                <span className="text-sm text-gray-600">{skill.level}</span>
            </div>
        </div>
    );

    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
                <Dialog>
                    <form>
                        <DialogTrigger asChild>
                            <div className='flex gap-2 p-2 cursor-pointer hover:bg-red-200 rounded-lg transition-colors'>
                                <Plus size={24} />
                                <span className="font-medium">Add</span>
                            </div>
                        </DialogTrigger>
                        <AddSkills></AddSkills>
                    </form>
                </Dialog>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                    {leftColumnSkills.map((skill) => (
                        <SkillItem key={skill.id} skill={skill} />
                    ))}
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {rightColumnSkills.map((skill) => (
                        <SkillItem key={skill.id} skill={skill} />
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Proficiency Levels</h4>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-2 bg-purple-600 rounded"></div>
                        <span className="text-sm text-gray-600">Expert</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-2 bg-green-600 rounded"></div>
                        <span className="text-sm text-gray-600">Advanced</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-2 bg-blue-600 rounded"></div>
                        <span className="text-sm text-gray-600">Intermediate</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-2 bg-gray-600 rounded"></div>
                        <span className="text-sm text-gray-600">Beginner</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
