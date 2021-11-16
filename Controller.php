<?php


use App\Conexao\Conexao;
use App\Vendas\Usuario;
use App\Vendas\PagSeguro;
use App\Vendas\functions;

require_once 'vendor/autoload.php';

$r = new Rotas();
$r->verificarRotas();


class Rotas
{
	public function verificarRotas()
	{


		$obj = json_decode(file_get_contents('php://input'));

		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Credemtials:true');
		header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
		header('Access-Control-Allow-Headers: Content-Type,Authorization,x-Requested-With');
		header('Content-Type: application/json; charset=utf8');

		$rlogin = $obj->pass;


		header('Content-Type: application/json');

		switch ($rlogin) {

			case "login":
				$tes = new functions();
				$mostrar = $tes->buscarLogin($obj);
				if ($mostrar == true) {
					$mostrar = $tes->gerarToken($obj);
					echo json_encode($mostrar);
				} else {
					echo json_encode($mostrar);
				}
				break;
			case "slider":
				$rt = new functions();
				$rt->buscarSliders();
				//  echo json_encode($rlogin . 'ok');
				break;
			case "categoria":
				$rt = new functions();
				$rt->buscarCategorias();
				break;
			case "popular":
				$rt = new functions();
				$rt->buscarPopularProducts($obj->fornc);
				break;
			case "produtosolo":
				$rp = new functions();
				$rp->buscarProdutosolo($obj->fornc);
				break;
			case "krn":
				$ck = new functions();
				$venda = $ck->checkout($obj->items);
				echo json_encode($venda);
				break;
			case "listaProdutos":
				$rp = new functions();
				$rp->listarProdutos();
				break;
			case "registrar":
				$rp = new functions();
				$tes = $rp->inserir($obj);
				echo json_encode($tes);
				break;
			default:
				echo "esta rota nao esta definida";
		}
	}
}
