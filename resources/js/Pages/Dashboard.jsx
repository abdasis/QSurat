import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PageHeader from "@/Components/PageHeader";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <PageHeader pretitle={'Dashboard'} title={'Dashboard'}/>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="">
                    <div className="bg-white overflow-hidden shadow-sm rounded sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
