
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

export default function Rewards() {
  const { toast } = useToast();

  const handleRedeem = (reward: string, cost: number) => {
    toast({
      title: "Reward Redeemed",
      description: `You've successfully redeemed the ${reward}. ${cost} ReCoins have been deducted from your balance.`,
    });
  };

  const rewards = [
    {
      id: 1,
      name: "Amazon Gift Card",
      description: "₹500 Amazon shopping voucher",
      cost: 500,
      category: "shopping",
      image: "https://placehold.co/200x150/e2e8f0/1e293b?text=Amazon"
    },
    {
      id: 2,
      name: "Flipkart Voucher",
      description: "₹300 Flipkart shopping voucher",
      cost: 300,
      category: "shopping",
      image: "https://placehold.co/200x150/e2e8f0/1e293b?text=Flipkart"
    },
    {
      id: 3,
      name: "Coffee Gift Card",
      description: "Free coffee at partner cafes",
      cost: 100,
      category: "food",
      image: "https://placehold.co/200x150/e2e8f0/1e293b?text=Coffee"
    },
    {
      id: 4,
      name: "Movie Ticket",
      description: "One free movie ticket",
      cost: 200,
      category: "entertainment",
      image: "https://placehold.co/200x150/e2e8f0/1e293b?text=Movie"
    },
    {
      id: 5,
      name: "Restaurant Discount",
      description: "15% off at partner restaurants",
      cost: 150,
      category: "food",
      image: "https://placehold.co/200x150/e2e8f0/1e293b?text=Restaurant"
    },
    {
      id: 6,
      name: "Online Course",
      description: "Free access to a development course",
      cost: 400,
      category: "education",
      image: "https://placehold.co/200x150/e2e8f0/1e293b?text=Course"
    }
  ];

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h1 className="text-3xl font-bold mb-2">Rewards Store</h1>
      <p className="text-muted-foreground mb-6">Redeem your hard-earned ReCoins for exciting rewards!</p>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Balance</h2>
              <div className="text-2xl font-bold text-green-600 flex items-center">
                <span className="mr-2">💰</span>145 ReCoins
              </div>
            </div>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Available Rewards</h2>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Rewards</TabsTrigger>
                <TabsTrigger value="shopping">Shopping</TabsTrigger>
                <TabsTrigger value="food">Food & Drinks</TabsTrigger>
                <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {rewards.map(reward => (
                    <Card key={reward.id}>
                      <CardContent className="p-0">
                        <div className="aspect-[3/2] w-full overflow-hidden">
                          <img 
                            src={reward.image} 
                            alt={reward.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-medium">{reward.name}</h3>
                            <Badge>{reward.cost} RC</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {reward.description}
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/50">
                        <Button 
                          className="w-full" 
                          disabled={reward.cost > 145}
                          onClick={() => handleRedeem(reward.name, reward.cost)}
                        >
                          {reward.cost > 145 ? 'Not Enough ReCoins' : 'Redeem'}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="shopping" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {rewards.filter(reward => reward.category === 'shopping').map(reward => (
                    <Card key={reward.id}>
                      <CardContent className="p-0">
                        <div className="aspect-[3/2] w-full overflow-hidden">
                          <img 
                            src={reward.image} 
                            alt={reward.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-medium">{reward.name}</h3>
                            <Badge>{reward.cost} RC</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {reward.description}
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/50">
                        <Button 
                          className="w-full" 
                          disabled={reward.cost > 145}
                          onClick={() => handleRedeem(reward.name, reward.cost)}
                        >
                          {reward.cost > 145 ? 'Not Enough ReCoins' : 'Redeem'}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Similar structure for other tabs */}
              <TabsContent value="food" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {rewards.filter(reward => reward.category === 'food').map(reward => (
                    <Card key={reward.id}>
                      <CardContent className="p-0">
                        <div className="aspect-[3/2] w-full overflow-hidden">
                          <img 
                            src={reward.image} 
                            alt={reward.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-medium">{reward.name}</h3>
                            <Badge>{reward.cost} RC</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {reward.description}
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/50">
                        <Button 
                          className="w-full" 
                          disabled={reward.cost > 145}
                          onClick={() => handleRedeem(reward.name, reward.cost)}
                        >
                          {reward.cost > 145 ? 'Not Enough ReCoins' : 'Redeem'}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="entertainment" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {rewards.filter(reward => reward.category === 'entertainment').map(reward => (
                    <Card key={reward.id}>
                      <CardContent className="p-0">
                        <div className="aspect-[3/2] w-full overflow-hidden">
                          <img 
                            src={reward.image} 
                            alt={reward.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-medium">{reward.name}</h3>
                            <Badge>{reward.cost} RC</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {reward.description}
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/50">
                        <Button 
                          className="w-full" 
                          disabled={reward.cost > 145}
                          onClick={() => handleRedeem(reward.name, reward.cost)}
                        >
                          {reward.cost > 145 ? 'Not Enough ReCoins' : 'Redeem'}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="education" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {rewards.filter(reward => reward.category === 'education').map(reward => (
                    <Card key={reward.id}>
                      <CardContent className="p-0">
                        <div className="aspect-[3/2] w-full overflow-hidden">
                          <img 
                            src={reward.image} 
                            alt={reward.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-medium">{reward.name}</h3>
                            <Badge>{reward.cost} RC</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {reward.description}
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/50">
                        <Button 
                          className="w-full" 
                          disabled={reward.cost > 145}
                          onClick={() => handleRedeem(reward.name, reward.cost)}
                        >
                          {reward.cost > 145 ? 'Not Enough ReCoins' : 'Redeem'}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
