import CardList from '@/components/CardList'
import { EditUser } from '@/components/EditUser'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { HoverCardContent, HoverCardTrigger, HoverCard } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react'
import React from 'react'

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
                        <div className='flex gap-4'>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck
                                        size={36}
                                        className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been verified by the admin.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Shield
                                        size={36}
                                        className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Admin</h1>
                                    <p className="text-sm text-muted-foreground">
                                        Admin users have access to all features and can manage
                                        users.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Candy
                                        size={36}
                                        className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Awarded</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been awarded for their contributions.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Citrus
                                        size={36}
                                        className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Popular</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been popular in the community.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
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
                    <div className='bg-amber-300'>user</div>
                    <div className='bg-amber-300'>chart</div>
                </div>

            </div>

        </main>
    )
}

export default SingleUser
