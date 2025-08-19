const BlogDetails = async ({ params, searchParams }) => {
  const slug = (await params).slug;
  const query = await searchParams;

  return (
    <div>
      <h1 className="text-5xl">BlogDetails</h1>
      <ul>
        <li>{slug[0]}</li>
        <li>{slug[1]}</li>
        <li>{slug[2]}</li>
      </ul>
    </div>
  );
};

export default BlogDetails;
