import Badges from '@/components/Badges'
import CardList from '@/components/CardList'
import { EditUser } from '@/components/EditUser'
import { ChartLineMultiple } from '@/components/ChartLineMultiple'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Progress } from '@/components/ui/progress'

function SingleUser() {
    return (
        <main>
            <Breadcrumb className='py-0'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Ahmed sekak</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className='flex flex-col xl:flex-row gap-8 mt-4'>
                <div className='flex flex-col gap-8 w-full xl:w-1/3'>
                    <div className='bg-primary-foreground p-4 rounded-lg'>
                        <h1 className="mb-4 font-medium text-md">Badges</h1>
                        <Badges />
                    </div>

                    <div className='bg-primary-foreground p-4 rounded-lg flex flex-col gap-4'>
                        <div className='flex items-center justify-between'>
                            <h1 className="font-medium text-md">User Information</h1>
                            <EditUser />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-sm text-muted-foreground'>Profile completion</span>
                            <Progress value={50} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold'>Username:</span>
                                <span className='text-sm text-muted-foreground'>john_doe</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold'>Email:</span>
                                <span className='text-sm text-muted-foreground'>john_doe@example.com</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold'>Location:</span>
                                <span className='text-sm text-muted-foreground'>New York, USA</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold'>Phone:</span>
                                <span className='text-sm text-muted-foreground'>+1 (555) 123-4567</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold'>Role:</span>
                                <Badge>Admin</Badge>
                            </div>
                            <span className='text-sm text-muted-foreground'>Joined on <time dateTime="2020-01-01">January 1, 2020</time></span>
                        </div>
                    </div>

                    <div className='bg-primary-foreground p-4 rounded-lg'><CardList title={'latest_transactions'} /></div>
                </div>

                <div className='flex flex-col gap-8 w-full xl:w-2/3 '>
                    <div className='bg-primary-foreground p-4 rounded-lg'>
                        <div className='flex items-center gap-2 p-4'>
                            <Avatar className='h-12 w-12'>
                                <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                                <AvatarFallback>Med Sekk</AvatarFallback>
                            </Avatar>
                            <span className='font-bold'>Med Sekak</span>
                        </div>
                        <p className='text-sm px-4 text-muted-foreground'>Med Sekak is a software engineer with a passion for building user-friendly applications.</p>
                    </div>
                    <div className='bg-primary-foreground p-4 rounded-lg'>
                        <h1 className="font-medium text-md mb-4">User Activity</h1>
                        <ChartLineMultiple />
                    </div>
                </div>

            </div>

        </main>
    )
}

export default SingleUser
