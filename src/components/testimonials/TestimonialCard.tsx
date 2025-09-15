export const TestimonialCard = ({
  text,
  name,
  role,
  avatar,
}: {
  text: string;
  name: string;
  role: string;
  avatar: string;
}) => {
  return (
    <div className="card">
      <p className="text-sm leading-relaxed mb-4">{text}</p>
      <div className="flex items-center gap-3 overflow-hidden">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-neutral-400">{role}</p>
        </div>
      </div>
    </div>
  );
};
