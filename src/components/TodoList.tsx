'use client'
import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Calendar } from './ui/calendar'

function TodoList() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className='flex flex-col gap-4'>
            <h1 className="font-medium text-md">Todo List</h1>
            <Popover>
                <PopoverTrigger className='w-full' asChild>
                    <Button className='w-full' variant="default">
                        <CalendarIcon />
                        <span>{format(new Date(), "PPP")}</span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='p-0 w-auto'>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </PopoverContent>
            </Popover>
            <ScrollArea className="h-[400px]">
                <div className='flex flex-col gap-2'>
                    <Card className='flex flex-row items-center p-4'>
                        <Checkbox id='todo-1' />
                        <label htmlFor='todo-1' className="text-sm text-muted-foreground">Learn React, solid plan for testing, need more explaining </label>
                    </Card>
                    <Card className='flex flex-row items-center p-4'>
                        <Checkbox id='todo-1' />
                        <label htmlFor='todo-1' className="text-sm text-muted-foreground">Learn React</label>
                    </Card>
                    <Card className='flex flex-row items-center p-4'>
                        <Checkbox id='todo-1' />
                        <label htmlFor='todo-1' className="text-sm text-muted-foreground">Learn React</label>
                    </Card>
                    <Card className='flex flex-row items-center p-4'>
                        <Checkbox id='todo-1' />
                        <label htmlFor='todo-1' className="text-sm text-muted-foreground">Learn React</label>
                    </Card>
                    <Card className='flex flex-row items-center p-4'>
                        <Checkbox id='todo-1' />
                        <label htmlFor='todo-1' className="text-sm text-muted-foreground">Learn React</label>
                    </Card>
                    <Card className='flex flex-row items-center p-4'>
                        <Checkbox id='todo-1' />
                        <label htmlFor='todo-1' className="text-sm text-muted-foreground">Learn React</label>
                    </Card>
                    <Card className='flex flex-row items-center p-4'>
                        <Checkbox id='todo-1' />
                        <label htmlFor='todo-1' className="text-sm text-muted-foreground">Learn React</label>
                    </Card>
                    <Card className='flex flex-row items-center p-4'>
                        <Checkbox id='todo-1' />
                        <label htmlFor='todo-1' className="text-sm text-muted-foreground">Learn React</label>
                    </Card>
                    <Card className='flex flex-row items-center p-4'>
                        <Checkbox id='todo-1' />
                        <label htmlFor='todo-1' className="text-sm text-muted-foreground">Learn React</label>
                    </Card>
                    <Card className='flex flex-row items-center p-4'>
                        <Checkbox id='todo-1' />
                        <label htmlFor='todo-1' className="text-sm text-muted-foreground">Learn React</label>
                    </Card>
                    <Card className='flex flex-row items-center p-4'>
                        <Checkbox id='todo-1' />
                        <label htmlFor='todo-1' className="text-sm text-muted-foreground">Learn React</label>
                    </Card>
                    <Card className='flex flex-row items-center p-4'>
                        <Checkbox id='todo-1' />
                        <label htmlFor='todo-1' className="text-sm text-muted-foreground">Learn React</label>
                    </Card>


                </div>
            </ScrollArea>
        </div>
    )
}

export default TodoList
