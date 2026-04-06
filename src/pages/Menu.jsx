import React, { useState } from 'react';
import { 
  Search,
  Coffee,
  UtensilsCrossed,
  Pizza,
  Soup,
  Salad,
  Sandwich,
  Beef,
  Wine,
  Cake,
  Flame,
  Filter,
  X,
  ChevronDown,
  ExternalLink,
  BookOpen
} from 'lucide-react';

const ZedSkyMenu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Categories with icons
  const categories = [
    { id: 'all', name: 'All Items', icon: BookOpen },
    { id: 'coffee_hot', name: 'Coffee (Hot)', icon: Coffee },
    { id: 'coffee_cold', name: 'Coffee (Cold)', icon: Coffee },
    { id: 'tea_hot', name: 'Tea (Hot)', icon: Coffee },
    { id: 'quenchers', name: 'Summer Quenchers', icon: Wine },
    { id: 'shakes', name: 'Shakes', icon: Wine },
    { id: 'pizza', name: 'Pizza', icon: Pizza },
    { id: 'pasta', name: 'Pasta', icon: UtensilsCrossed },
    { id: 'fries', name: 'Fries', icon: UtensilsCrossed },
    { id: 'momo', name: 'Momo', icon: UtensilsCrossed },
    { id: 'omelettes', name: 'Omelettes', icon: UtensilsCrossed },
    { id: 'sandwich', name: 'Sandwiches', icon: Sandwich },
    { id: 'desserts', name: 'Desserts', icon: Cake },
  ];

  // Complete menu data from pasted text
  const menuItems = [
    // COFFEE (HOT)
    { id: 1, category: 'coffee_hot', name: 'Simple Hot Coffee', price: 79, description: 'A traditional Bengali coffee is a simple brew, made with a combination of coffee grounds, milk and sugar to your liking.' },
    { id: 2, category: 'coffee_hot', name: 'Filter Coffee', price: 179, description: 'A smooth, aromatic South Indian-style filter coffee, brewed to a rich, full-bodied finish. Served with milk and sugar to your liking.' },
    { id: 3, category: 'coffee_hot', name: 'Cafe Latte', price: 199, description: 'A balanced mix of espresso and steamed milk, topped with a light froth. A creamy and velvety coffee experience.' },
    { id: 4, category: 'coffee_hot', name: 'Cappuccino', price: 199, description: 'Espresso combined with steamed milk and a generous layer of foam, creating a frothy and well-balanced cup.' },
    { id: 5, category: 'coffee_hot', name: 'Espresso Shot', price: 99, description: 'Rich, concentrated coffee brewed to perfection, offering a strong and intense flavor in every sip. The purest form of coffee.' },
    { id: 6, category: 'coffee_hot', name: 'Double Espresso Shot', price: 199, description: 'A stronger version of the espresso shot, delivering twice the richness and depth. Perfect for those who crave an intense coffee experience.' },
    { id: 7, category: 'coffee_hot', name: 'Macchiato', price: 149, description: 'A shot of espresso with just a touch of steamed milk, resulting in a bold and creamy flavor with a smooth finish.' },
    { id: 8, category: 'coffee_hot', name: 'Cortado', price: 199, description: 'A short, strong espresso paired with an equal amount of warm milk, creating a smooth and balanced coffee with a slight sweetness.' },
    { id: 9, category: 'coffee_hot', name: 'Flat White', price: 249, description: 'A velvety blend of espresso and steamed milk, with a thin layer of microfoam. The perfect balance between strength and creaminess.' },
    { id: 10, category: 'coffee_hot', name: 'Americano', price: 179, description: 'Espresso diluted with hot water, creating a rich and smooth cup of coffee with a bold, full flavor.' },
    { id: 11, category: 'coffee_hot', name: 'Mocha', price: 229, description: 'A delightful fusion of espresso, steamed milk, and rich chocolate syrup, topped with whipped cream for a sweet, decadent finish.' },
    { id: 12, category: 'coffee_hot', name: 'Pour Over', price: 179, description: 'A hand-brewed coffee made by slowly pouring hot water over freshly ground beans, producing a clean, bright, and flavorful cup.' },
    { id: 13, category: 'coffee_hot', name: 'Hazelnut Cappuccino', price: 219, description: 'A cappuccino with the added richness of hazelnut syrup, offering a nutty, slightly sweet flavor that pairs perfectly with the coffee\'s foam.' },

    // COFFEE (COLD)
    { id: 14, category: 'coffee_cold', name: 'Iced Latte', price: 199, description: 'A refreshing blend of chilled milk and rich espresso poured over ice-light, smooth, and perfect for a cool caffeine boost.' },
    { id: 15, category: 'coffee_cold', name: 'Iced Americano', price: 249, description: 'Bold espresso meets chilled water and ice for a smooth, no-nonsense cold brew that\'s strong, clean, and seriously refreshing.' },
    { id: 16, category: 'coffee_cold', name: 'Vietnamese Iced Coffee', price: 199, description: 'Intense, dark coffee poured over sweetened condensed milk and ice-bold, sweet, and silky with every sip.' },
    { id: 17, category: 'coffee_cold', name: 'Dark Chocolate Frappe', price: 199, description: 'Indulgently thick and creamy, this chilled blend of dark chocolate and coffee is topped with whipped cream-pure mocha bliss in every sip.' },
    { id: 18, category: 'coffee_cold', name: 'Roasted Hazelnut Frappe', price: 249, description: 'Cold-brewed espresso and roasted hazelnut flavors blended into a creamy iced frappe, topped with froth and hints of nutty sweetness.' },
    { id: 19, category: 'coffee_cold', name: 'Affogato', price: 229, description: 'A shot of espresso with just a touch of steamed milk, resulting in a bold and creamy flavor with a smooth finish.' },
    { id: 20, category: 'coffee_cold', name: 'Pistachio Affagato', price: 249, description: 'A short, strong espresso paired with an equal amount of warm milk, creating a smooth and balanced coffee with a slight sweetness.' },
    { id: 21, category: 'coffee_cold', name: 'Orange Coffee', price: 179, description: 'A bright and refreshing twist on the classic coffee. Freshly brewed coffee infused with the tangy zest of orange.' },

    // TEA (HOT)
    { id: 22, category: 'tea_hot', name: 'Darjeeling First Flush Tea', price: 149, description: 'Known as the "Champagne of Teas," this delicate, floral black tea is harvested in early spring, offering a light, muscatel aroma and a refreshing finish.' },
    { id: 23, category: 'tea_hot', name: 'Darjeeling Second Flush Tea', price: 149, description: 'A richer, bolder brew with notes of stone fruits and a smooth body-perfect for those who enjoy a deeper black tea experience.' },
    { id: 24, category: 'tea_hot', name: 'Earl Grey', price: 139, description: 'A classic black tea infused with the citrusy essence of bergamot, offering a fragrant and uplifting cup with a refined English touch.' },
    { id: 25, category: 'tea_hot', name: 'Jasmine Tea', price: 149, description: 'A soothing green tea delicately scented with jasmine blossoms, creating a floral, aromatic brew that\'s calming and refreshing.' },
    { id: 26, category: 'tea_hot', name: 'Kashmiri Kahwa Tea', price: 139, description: 'An exotic green tea infused with saffron, cardamom, almonds, and cinnamon-warm, spiced, and comforting like the valleys of Kashmir.' },
    { id: 27, category: 'tea_hot', name: 'Adrak Chai', price: 99, description: 'A robust Indian tea simmered with fresh ginger, delivering a spicy, invigorating kick in every sip.' },
    { id: 28, category: 'tea_hot', name: 'Elaichi Chai', price: 99, description: 'Aromatic and mildly sweet, this traditional tea is infused with green cardamom for a soothing, flavorful warmth.' },
    { id: 29, category: 'tea_hot', name: 'Masala Chai', price: 119, description: 'A bold blend of black tea and Indian spices brewed with milk-rich and the ultimate comfort in a cup.' },

    // SUMMER QUENCHERS
    { id: 30, category: 'quenchers', name: 'Cucumber Mint Mojito', price: 169, description: 'A refreshing blend of muddled cucumber and mint leaves, topped with soda and lime-perfectly cooling and hydrating.' },
    { id: 31, category: 'quenchers', name: 'Fresh Lime Soda', price: 149, description: 'A timeless thirst-quencher made with fresh lime, soda, and a hint of salt or sugar-light, fizzy, and perfect for any weather.' },
    { id: 32, category: 'quenchers', name: 'Aam Panna Mojito', price: 169, description: 'A tangy-sweet twist on the mojito with raw mango, mint, and spices-summer\'s favorite refresher in a glass.' },
    { id: 33, category: 'quenchers', name: 'Blue Curacao Mojito', price: 169, description: 'Vibrant and citrusy, this electric-blue mojito mixes mint, lime, and blue curacao syrup for a bold visual and taste punch.' },
    { id: 34, category: 'quenchers', name: 'Watermelon Mint Mojito', price: 169, description: 'Juicy watermelon chunks muddled with mint and lime, served chilled-fruity, hydrating, and irresistibly refreshing.' },
    { id: 35, category: 'quenchers', name: 'Fresh Detox Water (Limited Serving)', price: 179, description: 'Infused with cucumber, lemon, and mint-this detox water is light, hydrating, and ideal for a wellness boost.' },

    // SHAKES
    { id: 36, category: 'shakes', name: 'Belgian Chocolate Shake', price: 199, description: 'A rich and indulgent shake made with premium Belgian chocolate-decadently smooth and creamy in every sip.' },
    { id: 37, category: 'shakes', name: 'Kitkat Shake', price: 199, description: 'Crunchy KitKat chunks blended with chocolate and milk-crisp meets creamy in this dessert-like shake.' },
    { id: 38, category: 'shakes', name: 'Oreo Shake', price: 199, description: 'Crushed Oreos swirled with milk and ice cream-classic, creamy, and crowd-pleasing.' },
    { id: 39, category: 'shakes', name: 'Choco Chip Fantasy Shake', price: 199, description: 'Loaded with chocolate chips and creamy richness-every sip offers a delightful crunch and chocolate burst.' },
    { id: 40, category: 'shakes', name: 'Coffee Caramel Shake', price: 199, description: 'Bold coffee meets sweet caramel in this energizing yet indulgent shake-perfectly balanced.' },
    { id: 41, category: 'shakes', name: 'Butterscotch Shake', price: 199, description: 'A silky shake with rich butterscotch flavor and hints of toffee-sweet, smooth, and satisfyingly nostalgic.' },
    { id: 42, category: 'shakes', name: 'Nutella Shake', price: 259, description: 'Nutella lovers\' dream-thick, nutty, chocolaty, and irresistibly smooth from start to finish.' },

    // PIZZA
    { id: 43, category: 'pizza', name: 'Classic Margherita Pizza', price: 299, description: 'A timeless favourite with a soft base, rich tomato puree, and generous mozzarella cheese. Perfect for those who love it classic, simple, and satisfying.' },
    { id: 44, category: 'pizza', name: 'Veg Farmhouse Pizza', price: 329, description: 'Topped with seasonal veggies and melty cheese. A perfect pick for veggie lovers craving a cheesy, crunchy bite.' },
    { id: 45, category: 'pizza', name: 'Paneer Overloaded Pizza', price: 349, description: 'Soft paneer cubes marinated in Indian spices, spread over a cheesy base with fresh veggies. Every bite is full of flavor, crunch, and creamy richness.' },
    { id: 46, category: 'pizza', name: 'Classic Barbecue Chicken Pizza', price: 379, description: 'Juicy chunks of barbecue chicken layered on a cheesy crust. Balanced with onions and BBQ sauce for a bold, hearty experience.' },
    { id: 47, category: 'pizza', name: 'OYC Special Chicken Overloaded Pizza', price: 399, description: 'A chicken lover\'s dream with multi layers of spicy & grilled chicken. Finished with creamy cheese and a drizzle of our secret sauce.' },

    // PASTA
    { id: 48, category: 'pasta', name: 'Penne Pasta Tossed In White Sauce', price: 279, description: 'Penne cooked to perfection, smothered in a creamy white sauce with subtle herbs and spices. Comfort food at its best.' },
    { id: 49, category: 'pasta', name: 'Penne Pasta Tossed In Pink Sauce', price: 299, description: 'This ultra-delicious Pink Sauce Pasta is cooked al dente and tossed in a flavorful pink sauce. The dish is garnished with fresh basil and grated cheese.' },
    { id: 50, category: 'pasta', name: 'Creamy Alfredo Pasta', price: 309, description: 'Creamy white sauce pasta loaded with veggies, herbs, and cheese. Rich, indulgent, and soul-satisfying.' },
    { id: 51, category: 'pasta', name: 'Pasta In Pesto Sauce', price: 309, description: 'A classic Italian pasta tossed in olive oil, and pesto sauce made from basil, pine nuts, garlic. Simple, aromatic, and packed with flavor.' },

    // FRIES
    { id: 52, category: 'fries', name: 'Salted French Fries', price: 119, description: 'Crispy golden fries sprinkled with just the right amount of salt. A classic munch that\'s light, crunchy, and universally loved.' },
    { id: 53, category: 'fries', name: 'Peri Peri Fries', price: 129, description: 'Tossed in a fiery peri peri spice blend, these fries bring a bold, zesty kick with every bite. Perfect for spice lovers!' },
    { id: 54, category: 'fries', name: 'Cheese Loaded Fries', price: 159, description: 'Crisp fries smothered in hot, melted cheese and topped with seasoning. A creamy, indulgent snack that\'s hard to resist.' },

    // MOMO
    { id: 55, category: 'momo', name: 'North Bengal Spl Vegetable Steam Momo', price: 149, description: 'A healthy mix of seasonal vegetables infused with North Bengal-style masalas. Light, aromatic, and steamed to preserve every natural flavor.' },
    { id: 56, category: 'momo', name: 'North Bengal Spl Chicken Steam Momo', price: 169, description: 'Juicy minced chicken momos seasoned with North Bengal spices and herbs, steamed to tender perfection. Served with spicy red chutney for a true regional bite.' },
    { id: 57, category: 'momo', name: 'Chicken Cheese Steam Momo', price: 179, description: 'A creamy fusion of chicken and melted cheese packed in soft momo wrappers. A rich, indulgent treat for cheese lovers.' },
    { id: 58, category: 'momo', name: 'Crunchy Chicken Momo', price: 189, description: 'Crispy outside, juicy inside-these chicken momos are fried to golden brown perfection and served with hot garlic chutney.' },

    // OMELETTES
    { id: 59, category: 'omelettes', name: 'Onion Omelette', price: 89, description: 'Simple yet flavorful-this Indian-style omelette is loaded with finely chopped onions and green chilies cooked till crispy at the edges.' },
    { id: 60, category: 'omelettes', name: 'Cheese Omelette', price: 129, description: 'Fluffy eggs folded with melted cheese, seasoned to perfection. A protein-rich classic that melts in your mouth with every bite.' },
    { id: 61, category: 'omelettes', name: 'Spanish Omelette', price: 149, description: 'A hearty, rustic-style omelette packed with sautéed potatoes, bell peppers, onions, and herbs-perfectly golden and satisfying.' },

    // SANDWICHES
    { id: 62, category: 'sandwich', name: 'Corn Cheese Sandwich', price: 189, description: 'Delicious grilled sandwich made with boiled sweet corn, onion and grated cheese.' },
    { id: 63, category: 'sandwich', name: 'OYC Special Sandwich - Veg', price: 209, description: 'Our chef\'s special veg creation with grilled veggies, cheese, and secret herbs. Every bite bursts with creamy and crunchy goodness.' },
    { id: 64, category: 'sandwich', name: 'Chicken Grilled Sandwich', price: 199, description: 'Tender chicken slices layered with fresh veggies, creamy mayo, and cheese. Grilled to perfection for a smoky, juicy bite in every mouthful.' },
    { id: 65, category: 'sandwich', name: 'OYC Special Sandwich - Non Veg', price: 239, description: 'A loaded delight with grilled chicken, spicy mayo, cheese, and our signature sauces. Served hot and crispy- crafted specially for meat lovers.' },

    // DESSERT
    { id: 66, category: 'desserts', name: 'Crunchy Vanilla', price: 149, description: 'Creamy vanilla ice cream topped with crunchy choco chips and goodness of chocolate sauce.' },
    { id: 67, category: 'desserts', name: 'Chocolate Walnut Brownie', price: 169, description: 'These nutty, simple chocolate brownies are great to taste topped with a scoop of vanilla icecream and chocolate sauce.' },
  ];

  // Filter items based on category and search
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Group items by category for display
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const CategoryIcon = ({ categoryId }) => {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return null;
    const Icon = category.icon;
    return <Icon className="w-4 h-4 text-[#d4af37]" />;
  };

  const getCategoryDisplayName = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-['Inter']">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#d4af37]/20 to-transparent py-12 px-5 lg:py-16 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">OLD YARD MENU</h1>
          <p className="text-gray-400 text-lg">Explore Flavors · Handcrafted for the perfect rooftop vibe</p>
        </div>
      </div>

      {/* Digital Menu PDF Banner */}
      <div className="px-5 lg:px-10 -mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#d4af37]/5 border border-[#d4af37]/20 rounded-xl p-5 lg:p-6 flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#d4af37]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Digital Menu PDF</h3>
                <p className="text-gray-400 text-sm">View the full menu in original format</p>
              </div>
            </div>
            
            <a 
              href="/CAFE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto bg-[#d4af37] text-black px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#b38f2e] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              See Menu PDF
            </a>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-lg border-b border-white/10 py-4 px-5 lg:px-10 shadow-lg transition-all">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          
          {/* Top Row: Search & Mobile Toggle */}
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search dishes, drinks, or flavors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-all"
              />
            </div>
            
            {/* Filter Toggle - Mobile */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-full py-3 px-6 text-white"
            >
              <Filter className="w-4 h-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Bottom Row: Desktop Categories */}
          <div className="hidden lg:flex gap-2 overflow-x-auto pb-2 scrollbar-hide w-full items-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  activeCategory === category.id
                    ? 'bg-[#d4af37] text-black shadow-[0_0_10px_rgba(212,175,55,0.3)]'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-2 space-y-4">
              {/* Category Grid */}
              <div className="grid grid-cols-3 gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setShowFilters(false);
                    }}
                    className={`flex flex-col items-center gap-1 p-2 rounded-lg text-xs ${
                      activeCategory === category.id
                        ? 'bg-[#d4af37] text-black'
                        : 'bg-white/5 text-gray-300'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="text-center">{category.name}</span>
                  </button>
                ))}
              </div>

              {/* Price Range Filter */}
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-white mb-3">Price Range</h4>
                <div className="flex gap-4 items-center">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#d4af37]"
                  />
                  <span className="text-sm text-gray-300">Up to ₹{priceRange[1]}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Menu Content */}
      <div className="py-8 lg:py-12 px-5 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-400 text-sm">
              Showing {filteredItems.length} items
            </p>
            {activeCategory !== 'all' && (
              <button
                onClick={() => setActiveCategory('all')}
                className="flex items-center gap-1 text-[#d4af37] text-sm hover:underline"
              >
                <X className="w-3 h-3" />
                Clear filter
              </button>
            )}
          </div>

          {/* Menu Items by Category */}
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="mb-10 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                  <CategoryIcon categoryId={category} />
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-white capitalize">
                  {getCategoryDisplayName(category)}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-[#d4af37]/30 to-transparent"></div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {items.map(item => (
                  <div key={item.id} className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                      <span className="text-[#d4af37] font-bold">₹{item.price}</span>
                    </div>
                    
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">No items found</h3>
              <p className="text-gray-400">Try adjusting your search or filter</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  setPriceRange([0, 1000]);
                }}
                className="mt-4 bg-[#d4af37] text-black px-6 py-2 rounded-full font-semibold"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="sticky bottom-20 lg:bottom-10 left-0 right-0 flex justify-center px-5 lg:px-10 pointer-events-none">
        <div className="bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black px-6 py-3 rounded-full font-semibold shadow-2xl flex items-center gap-3 pointer-events-auto">
          <span className="text-sm lg:text-base">Call to Order: +91 98765 43210</span>
        </div>
      </div>
    </div>
  );
};

export default ZedSkyMenu;