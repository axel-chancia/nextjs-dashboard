import SideNav from '@/app/ui/dashboard/sidenav';
 {/*^pour faire le menu et les lien entre les pages*/}
export default function RootLayou({
   children, 
  }: { 
  children: React.ReactNode; 
  }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}