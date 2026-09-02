export default function SummaryCard({ title, value, description, icon: Icon }) {
  return (
    <div className='border border-border rounded-xl p-5 bg-card flex flex-col justify-between hover:border-foreground/30 transition-colors'>
      <div className='space-y-3'>
        <div className='flex items-center justify-between text-muted-foreground'>
          <span className='text-xs font-semibold uppercase tracking-wider'>
            {title}
          </span>
          {Icon && <Icon className='w-4 h-4 text-foreground' />}
        </div>
        <div>
          <p className='text-2xl font-bold tracking-tight text-foreground'>
            {value}
          </p>
          <p className='text-[11px] text-muted-foreground mt-0.5'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
