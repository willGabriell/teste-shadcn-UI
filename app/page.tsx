import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, PlusCircle } from 'lucide-react'

export default function Home() {
  return (
    <div id="container" className="p-6 max-w-4xl mx-auto ">
      <div className="flex items-center justify-center ">
        <Label className="font-bold text-2xl">Cadastro de Produtos</Label>
      </div>

      <div className="flex items-center justify-between py-5">

        <form className="flex items-center gap-2">
          <Input name="id" placeholder="ID do Pedido" />
          <Input name="nome" placeholder="Nome do Pedido" />
          <Button type="submit" variant={"link"}> <Search className="w-4 h-4 mr-2" /> Filtrar Resultado</Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button> <PlusCircle /> Adicionar Produto</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Produto</DialogTitle>
              <DialogDescription>Adicionar Produto ao Sistema</DialogDescription>
            </DialogHeader>

            <form className="space-y-6">

              <div className="grid grid-cols-4 items-center text-right gap-3 font-bold">
                <Label htmlFor="name">Produto</Label>
                <Input className="col-span-3" id="name" />
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3 font-bold">
                <Label htmlFor="preco">Preço</Label>
                <Input className="col-span-3" id="preco" />
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant={"outline"}>Cancelar</Button>
                </DialogClose>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>

          </DialogContent>
        </Dialog>
      </div>


      <div className="border rounded">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Idade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{(i + 56) * 39}</TableCell>
                  <TableCell>Pessoa {i}</TableCell>
                  <TableCell>{(i + 2) * 3}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
