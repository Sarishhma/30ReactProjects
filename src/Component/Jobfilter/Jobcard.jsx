// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Jobcard({ job }) {
//   return (
//     <Card className="rounded-2xl shadow-sm">
//       <CardContent className="p-4 space-y-2">
//         <h2 className="text-xl font-semibold">{job.title}</h2>

//         <p className="text-sm text-muted-foreground">
//           {job.company} • {job.location}
//         </p>

//         <p className="text-sm">
//           {job.type} • {job.experience}
//         </p>

//         <p className="font-medium">
//           ${job.salary.toLocaleString()}
//         </p>

//         <div className="flex gap-2 flex-wrap">
//           {job.tags.map((tag) => (
//             <span
//               key={tag}
//               className="text-xs bg-muted px-2 py-1 rounded-full"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         <Button className="mt-2">Apply</Button>
//       </CardContent>
//     </Card>
//   );
// }
