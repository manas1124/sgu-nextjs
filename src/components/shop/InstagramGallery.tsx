// src/components/shop/InstagramGallery.tsx
// Server Component

export default function InstagramGallery() {
  const seeds = ['ig1', 'ig2', 'ig3', 'ig4', 'ig5', 'ig6', 'ig7'];

  return (
    <section className="py-16 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-2xl font-bold mb-2">Follow Us On Instagram</h2>
        <p className="text-sm text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem.
        </p>
        <div className="grid grid-cols-7 gap-1">
          {seeds.map(seed => (
            <div
              key={seed}
              className="aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={`https://picsum.photos/seed/${seed}/200/200`}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110
                           transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
