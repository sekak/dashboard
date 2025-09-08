import React from 'react'
import { HoverCardContent, HoverCardTrigger, HoverCard } from '@/components/ui/hover-card'
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react'

function Badges() {
    return (
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
    )
}

export default Badges
