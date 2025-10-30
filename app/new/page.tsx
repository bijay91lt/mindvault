import { NoteEditor } from '@/components/NoteEditor'

function page() {
  return (
    <div className='container mx-auto py-6 px-4 max-w-2xl'>
        <h1 className='text-2xl font-bold mb-6'>New Notes</h1>
        <NoteEditor/>
    </div>
  )
}

export default page