const StickyDemo = () => {
  console.info(0)

  return (
    <div className="relative">
      <div className="w-[200px] h-[2900px] border border-solid border-blue px-1 py-1">
        <div className="sticky top-10 h-full w-full bg-gray border border-solid border-gray">
          header
        </div>
      </div>
    </div>
  )
}

export default StickyDemo
