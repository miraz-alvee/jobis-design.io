import { Pencil, Trash2, Plus, Check } from 'lucide-react';
import AddLanguages from './AddLanguages';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import EditLanguages from './EditLanguages';
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

interface Language {
  id: string;
  name: string;
  proficiency: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
  skills: {
    reading: boolean;
    writing: boolean;
    listening: boolean;
    speaking: boolean;
  };
}

export default function Languages() {
  const languages: Language[] = [
    {
      id: '1',
      name: 'English',
      proficiency: 'Expert',
      skills: {
        reading: true,
        writing: true,
        listening: true,
        speaking: true,
      },
    },
    {
      id: '2',
      name: 'Bengali',
      proficiency: 'Expert',
      skills: {
        reading: true,
        writing: true,
        listening: true,
        speaking: true,
      },
    },
    {
      id: '3',
      name: 'Hindi',
      proficiency: 'Intermediate',
      skills: {
        reading: true,
        writing: false,
        listening: true,
        speaking: true,
      },
    },
    {
      id: '4',
      name: 'Spanish',
      proficiency: 'Beginner',
      skills: {
        reading: true,
        writing: true,
        listening: true,
        speaking: false,
      },
    },
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-purple-100 text-purple-700';
      case 'Advanced':
        return 'bg-green-100 text-green-700';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-700';
      case 'Beginner':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Languages</h2>
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <div className='flex gap-2 p-2 cursor-pointer hover:bg-red-200 rounded-lg transition-colors'>
                <Plus size={24} />
                <span className="font-medium">Add</span>
              </div>
            </DialogTrigger>
            <AddLanguages />
          </form>
        </Dialog>
      </div>

      {/* Languages List */}
      <div className="space-y-4">
        {languages.map((language) => (
          <div
            key={language.id}
            className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              {/* Language Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {language.name}
                </h3>

                {/* Proficiency and Skills */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Proficiency Badge */}
                  <span
                    className={`px-3 py-1 rounded text-sm font-medium ${getProficiencyColor(
                      language.proficiency
                    )}`}
                  >
                    {language.proficiency}
                  </span>

                  {/* Reading */}
                  {language.skills.reading && (
                    <div className="flex items-center gap-1.5 text-green-600">
                      <Check className="w-4 h-4" />
                      <span className="text-sm text-gray-600">Reading</span>
                    </div>
                  )}

                  {/* Writing */}
                  {language.skills.writing && (
                    <div className="flex items-center gap-1.5 text-green-600">
                      <Check className="w-4 h-4" />
                      <span className="text-sm text-gray-600">Writing</span>
                    </div>
                  )}

                  {/* Listening */}
                  {language.skills.listening && (
                    <div className="flex items-center gap-1.5 text-green-600">
                      <Check className="w-4 h-4" />
                      <span className="text-sm text-gray-600">Listening</span>
                    </div>
                  )}

                  {/* Speaking */}
                  {language.skills.speaking && (
                    <div className="flex items-center gap-1.5 text-green-600">
                      <Check className="w-4 h-4" />
                      <span className="text-sm text-gray-600">Speaking</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Dialog>
                  <form>
                    <DialogTrigger asChild>
                      <div className='flex p-2 gap-2 cursor-pointer hover:bg-red-200 rounded-lg transition-colors'>
                        <Pencil className="w-5 h-5 text-gray-600" />
                      </div>
                    </DialogTrigger>
                    <EditLanguages />
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
          </div>
        ))}
      </div>
    </div>
  );
}